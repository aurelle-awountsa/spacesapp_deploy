const express = require("express");
const router = express.Router();

const Space = require("../models/space_model")

router.get("/", async(req, res)=>{

    try {
        const spaces = await Space.find({})
        return res.json({spaces});

    } catch (error) {
        return res.status(400).json({message:error});
    }


});


module.exports = router;