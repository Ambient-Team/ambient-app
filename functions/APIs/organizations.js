const { db } = require("../util/admin");

exports.getAllOrganizations = (request, response) => {
  db.collection("organizations")
    .get()
    .then((data) => {
      let organizations = [];
      data.forEach((doc) => {
        organizations.push({
          id: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt
        });
      });
      return response.json(organizations);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.addOrganization = (request, response) => {
    //return db.collection("organizations").doc("org2").set({name: "name"});

  const newOrganization = {
    name: request.body.name,
    createdAt: new Date(),
  };
  db.collection("organizations")
    .add(newOrganization)
    .then((doc) => {
      const responseOrganization = newOrganization;
      return response.json(responseOrganization);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
}

// exports.getAllConnectors = (request, response) => {
//   db.collection("organizations")
//     .get()
//     .then((data) => {
//       let organizations = [];
//       data.forEach((doc) => {
//         organizations.push({
//           id: doc.id,
//           name: doc.data().name,
//           createdAt: doc.data().createdAt
//         });
//       });
//       return response.json(organizations);
//     })
//     .catch((err) => {
//       console.error(err);
//       return response.status(500).json({ error: err.code });
//     });
// };

// exports.createConnector = (request, response) => {
//   const newConnector = {
//     id: request.body.id,
//     name: request.body.name,
//     dataType: request.body.dataType,
//     dataEdit: new Date(),
//     status: request.body.status,
//   };
//   db.collection("connectors")
//     .add(newConnector)
//     .then((doc) => {
//       const responseConnector = newConnector;
//       return response.json(responseConnector);
//     })
//     .catch((err) => {
//       response.status(500).json({ error: "Something went wrong" });
//       console.error(err);
//     });
// };
