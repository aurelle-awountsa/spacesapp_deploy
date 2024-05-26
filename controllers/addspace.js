const Space = require("../models/space_model");

const create_space = async (req, res) => {

    console.log("bonjour");

    // vérifier si tous les champs sont remplis

    if (!req.body.titre || !req.body.description || !req.body.dimension || !req.body.place_assise || !req.body.place_debout || !req.body.ville || !req.body.prix || !req.body.imageUrl) {
        return res
            .status(400)
            .json({
                success: false,
                message: "tous les champs sont obligatoires"
            });
    }

    const space = new Space({
        titre: req.body.titre,
        description: req.body.description,
        proprietaire: req.body.proprietaire,
        dimension: req.body.dimension,
        categorie: req.body.categorie,
        place_assise: req.body.place_assise,
        place_debout: req.body.place_debout,
        ville: req.body.ville,
        prix: req.body.prix,
        imageUrl: req.body.imageUrl



    });

    // on enregistre l'espace 
    space
        .save()
        .then(result => {
            console.log(result);
            res
                .status(201)
                .json({
                    success: true,
                    message: "l'espace a été ajouté avec succes",
                    space: {
                        spaceId: result._id,
                        titre: result.titre,
                        description: result.description,
                        proprietaire: result.proprietaire,
                        dimension: result.dimension,
                        categorie: result.categorie,
                        place_assise: result.place_assise,
                        place_debout: result.place_debout,
                        ville: result.ville,
                        prix: result.prix,
                        imageUrl: result.imageUrl

                    }
                });
        })

        // s'il y a une erreur dans la fonction save, on envoie status 500
        .catch(err => {
            console.log(err.name);
            console.log(err)

            res.status(500).json({
                success: false,
                error: err.message,
            });
        });
}

module.exports = { create_space, Space };
