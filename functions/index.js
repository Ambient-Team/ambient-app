const { admin } = require("./util/admin");
const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
const cookieParser = require("cookie-parser")();

app.use(cors({ origin: true }));

const { getAllConnectors, createConnector } = require("./APIs/connectors");
const {
  getAllOrganizations,
  addOrganization,
} = require("./APIs/organizations");
const {
  loginUser,
  signUpUser,
  getAllUsers,
  updateUser,
} = require("./APIs/users");
const { getAllDataExperts, addDataExpert } = require("./APIs/dataExperts");
const { getAllModels, addModel } = require("./APIs/models");

// Users
app.post("/login", loginUser);
app.post("/signup", signUpUser);

cors(app);

app.use(cookieParser);

const validateFirebaseIdToken = async (req, res, next) => {
  functions.logger.log("Check if request is authorized with Firebase ID token");

  if (
    (!req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")) &&
    !(req.cookies && req.cookies.__session)
  ) {
    functions.logger.error(
      "No Firebase ID token was passed as a Bearer token in the Authorization header.",
      "Make sure you authorize your request by providing the following HTTP header:",
      "Authorization: Bearer <Firebase ID Token>",
      'or by passing a "__session" cookie.'
    );
    res.status(403).send("Unauthorized");
    return;
  }

  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    functions.logger.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else if (req.cookies) {
    functions.logger.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send("Unauthorized");
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    functions.logger.log("ID Token correctly decoded", decodedIdToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    functions.logger.error("Error while verifying Firebase ID token:", error);
    res.status(403).send("Unauthorized");
    return;
  }
};

app.use(validateFirebaseIdToken);

//Connectors
app.get("/connectors", validateFirebaseIdToken, getAllConnectors);
app.post("/connectors/add", validateFirebaseIdToken, createConnector);

//Organizations
app.get("/org", validateFirebaseIdToken, getAllOrganizations);
app.post("/org", validateFirebaseIdToken, addOrganization);

//Users
app.get("/users", validateFirebaseIdToken, getAllUsers);
app.post("/user/update", validateFirebaseIdToken, updateUser);

//Data experts
app.get("/experts", validateFirebaseIdToken, getAllDataExperts);
app.post("/expert", validateFirebaseIdToken, addDataExpert);

//Models
app.get("/models", validateFirebaseIdToken, getAllModels);
app.post("/model", validateFirebaseIdToken, addModel);

exports.api = functions.https.onRequest(app);
