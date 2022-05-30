const { db } = require("../util/admin");

exports.getAllConnectors = (request, response) => {
  db.collection("connectors")
    .get()
    .then((data) => {
      let connectors = [];
      data.forEach((doc) => {
        connectors.push({
          idGen: doc.id,
          id: doc.data().id,
          name: doc.data().name,
          dataType: doc.data().dataType,
          dataEdit: doc.data().dataEdit,
          status: doc.data().status,
        });
      });
      return response.json(connectors);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.createConnector = (request, response) => {
  const newConnector = {
    id: request.body.id,
    name: request.body.name,
    dataType: request.body.dataType,
    dataEdit: new Date(),
    status: request.body.status,
  };
  db.collection("connectors")
    .add(newConnector)
    .then((doc) => {
      const responseConnector = newConnector;
      return response.json(responseConnector);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};
