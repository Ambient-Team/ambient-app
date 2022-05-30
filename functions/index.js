const functions = require("firebase-functions");
const app = require("express")();

const { getAllConnectors, createConnector } = require("./APIs/connectors");

app.get("/connectors", getAllConnectors);
app.post("/connectors/add", createConnector);

const { loginUser } = require("./APIs/users");

// Users
app.post("/login", loginUser);

const { signUpUser } = require("./APIs/users");

app.post("/signup", signUpUser);

exports.api = functions.https.onRequest(app);
