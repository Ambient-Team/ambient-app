const { db } = require("../util/admin");

exports.getAllDataExperts = (request, response) => {
  db.collection("dataExperts")
    .get()
    .then((data) => {
      let experts = [];
      data.forEach((doc) => {
        experts.push({
          id: doc.id,
          name: doc.data().Name,
        });
      });
      return response.json(experts);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

exports.addDataExpert = (request, response) => {
  const newExpert = {
    Name: request.body.name,
  };
  db.collection("dataExperts")
    .add(newExpert)
    .then((doc) => {
      const responseExpert = newExpert;
      return response.json(responseExpert);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};

// exports.updateDataExpert = (request, response) => {
//   const dataExpert = {
//     name: request.body.name,
//   };
//   db.collection("dataExperts").doc(request.body.id).update(dataExpert);
//   return response.json({ Name: "name5" });
// };
