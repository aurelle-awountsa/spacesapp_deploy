// routes/addspace.js
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const controller_space = require("../controllers/addspace");

const authenticate = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('No token, authorization denied');
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send('Token is not valid');
    }
  };
router.post("/", controller_space.create_space);

module.exports = router;
