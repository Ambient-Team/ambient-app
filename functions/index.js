const functions = require("firebase-functions");
const app = require("express")();

const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');

app.use(cors({ origin: true }));

app.get("/connectors", getAllConnectors);
app.post("/connectors/add", createConnector);

const { loginUser } = require("./APIs/users");

// Users
app.post("/login", loginUser);

const { signUpUser } = require("./APIs/users");

app.post("/signup", signUpUser);

cors(app);

exports.api = functions.https.onRequest(app);
