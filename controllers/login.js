const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

// connexion d'utilisateur

const user_login = (req, res) => {

    //vérification des champs

    if (!req.body.userName || !req.body.password) {
        return res
            .status(400)
            .json({message: "tous les champs sont obligatoire"});
    }

    User.findOne({userName: req.body.userName})
        .exec()
        .then(user => {
            //Utilisateur non trouvé à partir du mail

            if (!user) {
                return res
                    .status(401)
                    .json({
                        success: false,
                        message: "Authentification échoué !"
                    });
            } 

            // déashage et comparaison des mots de passe par la librerie  bcrypt
            bcrypt.compare(req.body.password, user.password, (err, result) => {

                //comparaison échoué
                if (err) {
                    return res.status(401).json({
                        success: false,
                        message: "Authentification échoué"
                    });
                }

                //comparaison OK et signature du token par la librairie JWT
                if (result) {
                    const token = jwt.sign( 
                        {
                            userName: user.userName,
                            email: user.email,
                            userId: user._id
                        },
                        
                        process.env.JWT_KEY,   //clé secrete du backend
                        {
                            expiresIn: "5h" //temps d'expiration du token
                        }
                    );

                    return res
                        .status(200)
                        .json({
                        success: true,
                        message: "Authentification réussi",
                        token: "JWT " + token,
                        user: {
                            userId: user._id,
                            email: user.email,
                            userName: user.userName,
                            password:user.password
                        }
                    });
                }
                res.status(401).json({
                    success: false,
                    message: "Authentification échoué"
                });
            });
        })
        .catch(err => {

            res
                .status(500)
                .json({
                success: false,
                error: err
            });
        });
};

module.exports = {user_login};