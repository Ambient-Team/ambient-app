
const { db } = require('../util/admin');

exports.getAllConnectors = (request, response) => {
	db
		.collection('connectors')
		.get()
		.then((data) => {
			let connectors = [];
			data.forEach((doc) => {
				connectors.push({
                    idGen : doc.id,
                    id: doc.data().id,
                    name: doc.data().name,
					dataType: doc.data().dataType,
					dataEdit: doc.data().dataEdit,
                    status: doc.data().status
				});
			});
			return response.json(connectors);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

