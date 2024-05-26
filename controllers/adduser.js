//const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/user_model");

//création de compte
const create_user = (req, res) => {
    console.log(req);
    // vérifier si tous les champs sont remplis

    if (!req.body.name  || !req.body.userName || !req.body.email || !req.body.password || !req.body.cpassword) {
        return res
            .status(400)
            .json({
                success: false,
                message: "tous les champs sont obligatoire"
            });
    }


    // requête vers la db afin de trouver si y a un email deja existant

    User.find({ email: req.body.email})
        .exec()
        .then(user => {

            console.log(user);

            if (user.length == 1) {
                return res
                    .status(409)
                    .json({
                        success: false,
                        message: "cet email existe déjà"
                    });
            } else {

                // hashage du mot de passe
                 bcrypt.hash(req.body.password, 10, (err, hash) => {

                    // vérifier s'il y a une erreur dans le hashage du mot de passe
        
                    if (err) {
                        return res
                            .status(500)
                            .json({error: err});

                        // s'il y a pas d'erreur dans le hashage du mot de passe, on donne le hash comme mot de passe de l'utilisateur 
                    } else {
                        const user = new User({
                            name: req.body.name,
                            userName: req.body.userName,
                            email: req.body.email,
                            password: hash,
                            cpassword: hash

                        });

                        // on enregistre l'utilisateur avec un mot de passe hashé
                        user
                            .save()
                            .then(result => {
                               console.log(result);
                                res
                                    .status(201)
                                    .json({
                                        success: true,
                                        message: "l'utilisateur a été créé avec succes",
                                        user: {
                                            userId: result._id,
                                            name: result.name,
                                            userName: result.userName,
                                            email: result.email,
                                            password: result.password,
                                            cpassword: result.cpassword

                                        }
                                    });
                            })

                            // s'il y a une erreur dans la fonction save, on envoie status 500
                            .catch(err => {
                              console.log(err.name);
                                res.status(500).json({
                                    success: false,
                                    error: err.message,
                                });
                            });
                    }
                });
            }
        })
};


module.exports = { create_user, User };
