const express = require("express");
const router = express.Router();

const Categorie = require("../models/categorie_model")

router.get("/", async(req, res)=>{

    try {
        const categories = await Categorie.find({})
        return res.json({categories});

    } catch (error) {
        return res.status(400).json({message:error});
    }


});


module.exports = router;