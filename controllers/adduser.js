const bcrypt = require('bcryptjs');
const User = require("../models/user_model");

//création de compte
const create_user = (req, res) => {
    console.log(req);

    // vérifier si tous les champs sont remplis
    if (!req.body.name || !req.body.userName || !req.body.email || !req.body.password || !req.body.cpassword) {
        return res.status(400).json({
            success: false,
            message: "Tous les champs sont obligatoires"
        });
    }

    // Requête vers la db afin de trouver s'il y a un email ou un username déjà existant
    const emailCheck = User.findOne({ email: req.body.email }).exec();
    const userNameCheck = User.findOne({ userName: req.body.userName }).exec();

    Promise.all([emailCheck, userNameCheck])
        .then(results => {
            const [emailUser, userNameUser] = results;

            if (emailUser) {
                return res.status(409).json({
                    success: false,
                    message: "Cet email existe déjà"
                });
            }

            if (userNameUser) {
                return res.status(409).json({
                    success: false,
                    message: "Ce nom d'utilisateur existe déjà"
                });
            }

            // Hashage du mot de passe
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }

                // S'il n'y a pas d'erreur dans le hashage du mot de passe, on donne le hash comme mot de passe de l'utilisateur 
                const user = new User({
                    name: req.body.name,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: hash,
                    cpassword: hash
                });

                // On enregistre l'utilisateur avec un mot de passe hashé
                user.save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            success: true,
                            message: "L'utilisateur a été créé avec succès",
                            user: {
                                userId: result._id,
                                name: result.name,
                                userName: result.userName,
                                email: result.email
                            }
                        });
                    })
                    .catch(err => {
                        console.log(err.name);
                        res.status(500).json({
                            success: false,
                            error: err.message
                        });
                    });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                error: err.message
            });
        });
};

module.exports = { create_user, User };
