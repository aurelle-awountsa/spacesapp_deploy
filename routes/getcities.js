const express = require("express");
const router = express.Router();

const City = require("../models/city_model")

router.get("/", async(req, res)=>{

    try {
        const cities = await City.find({})
        return res.json({cities});

    } catch (error) {
        return res.status(400).json({message:error});
    }


});


module.exports = router;