const { db } = require("../util/admin");

exports.getAllModels = (request, response) => {
  db.collection("models")
    .get()
    .then((data) => {
      let models = [];
      data.forEach((doc) => {
        models.push({
          id: doc.id,
          dataExpert: doc.data().dataExpert,
          status: doc.data().status,
        });
      });
      return response.json(models);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.addModel = (request, response) => {
  //return db.collection("organizations").doc("org2").set({name: "name"});

  const newModel = {
    dataExpert: request.body.dataExpert,
    status: request.body.status,
  };
  db.collection("models")
    .add(newModel)
    .then((doc) => {
      const responseModel = newModel;
      return response.json(responseModel);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};
