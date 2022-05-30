// // const functions = require("firebase-functions");

// // // // Create and Deploy Your First Cloud Functions
// // // // https://firebase.google.com/docs/functions/write-firebase-functions
// // //
// // // exports.helloWorld = functions.https.onRequest((request, response) => {
// // //   functions.logger.info("Hello logs!", {structuredData: true});
// // //   response.send("Hello from Firebase!");
// // // });


// const functions = require('firebase-functions');

// exports.world = functions.https.onRequest((request, response) => {
//      response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllConnectors
} = require('./APIs/connectors')

app.get('/connectors', getAllConnectors);
exports.api = functions.https.onRequest(app);