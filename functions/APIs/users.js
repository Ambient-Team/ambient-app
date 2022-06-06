const { admin, db } = require('../util/admin');
const config = require('../util/config');

const firebase = require('firebase');

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login
exports.loginUser = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    }

    const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return response.json({ token });
        })
        .catch((error) => {
            console.error(error);
            return response.status(403).json({ general: 'wrong credentials, please try again'});
        })
};

exports.signUpUser = (request, response) => {
    const newUser = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        country: request.body.country,
		password: request.body.password,
		confirmPassword: request.body.confirmPassword,
		username: request.body.username
    };

    const { valid, errors } = validateSignUpData(newUser);

	if (!valid) return response.status(400).json(errors);

    let token, userId;
    db
        .doc(`/users/${newUser.username}`)
        .get()
        .then((doc) => {
            if (doc.exists) {
                return response.status(400).json({ username: 'this username is already taken' });
            } else {
                return firebase
                        .auth()
                        .createUserWithEmailAndPassword(
                            newUser.email, 
                            newUser.password
                    );
            }
        })
        .then((data) => {
            console.log(data);
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idtoken) => {
            token = idtoken;
            const userCredentials = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                username: newUser.username,
                phoneNumber: newUser.phoneNumber,
                country: newUser.country,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            };
            return db
                    .doc(`/users/${newUser.username}`)
                    .set(userCredentials);
        })
        .then(()=>{
            return response.status(201).json({ token });
        })
        .catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return response.status(400).json({ email: 'Email already in use' });
			} else {
				return response.status(500).json({ general: 'Something went wrong, please try again' });
			}
		});
}


exports.getAllUsers = (request, response) =>{
    db.collection("users")
    .get()
    .then((data) => {
    let users = [];
      data.forEach((doc) => {
        users.push({
          idGen: doc.id,
          id: doc.data().userId,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          organization: doc.data()?.organization,
          country: doc.data().country,
        });
      });
      return response.json(users);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });

}

exports.updateUser = (request, response) => {
    const organization = {
        name : request.body.name,
        createdAt: new Date()
    }
    const user = db.collection("users").doc(request.body.id).update({organization: organization});
    return response.json(user);
}

// exports.updateUser = (request, response) => {
//     const user = {
//         email: request.body.email,
//         password: request.body.password
//     }

//     const { valid, errors } = validateLoginData(user);
// 	if (!valid) return response.status(400).json(errors);

//     const userForUpdate = db.collection("users")
//     .doc("1326320004@qq.com");

//     userForUpdate.get().then(() => { userForUpdate.update({organization})})
//     userForUpdate.then((doc) => {
//       const responseConnector = newConnector;
//       return response.json(responseConnector);
//     })
//     .catch((err) => {
//       response.status(500).json({ error: "Something went wrong" });
//       console.error(err);
//     });

//     firebase
//         .auth()
//         .signInWithEmailAndPassword(user.email, user.password)
//         .then((data) => {
//             return data.user.getIdToken();
//         })
//         .then((token) => {
//             return response.json({ token });
//         })
//         .catch((error) => {
//             console.error(error);
//             return response.status(403).json({ general: 'wrong credentials, please try again'});
//         })
// };