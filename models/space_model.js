// models/addspace.js
const mongoose = require('mongoose');

const spaces = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    proprietaire:{
        type: String,
        require: true

    },

    dimension: {
        type: Number,
        required: true
    },
    place_assise: {
        type: Number,
        required: true
    },
    place_debout: {
        type: Number,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    categorie:{
        type:String,
        require: true
    },

    imageUrl: [],
});

const model_space = mongoose.model('Space', spaces);

module.exports = model_space;
