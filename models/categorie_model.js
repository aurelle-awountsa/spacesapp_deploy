const mongoose = require('mongoose');

const categories = mongoose.Schema({
    categorie: {
        type: String,
        required: true
    },
   
   
});

const model_categorie= mongoose.model('Categorie', categories);

module.exports = model_categorie;
