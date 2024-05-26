const mongoose = require('mongoose');

const cities = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    iso2: {
        type: String,
        required: true
    },
    admin_name: {
        type: String,
        required: true
    },
    capital: {
        type: String
    },
    population: {
        type: Number,
        required: true
    },
    population_proper: {
        type: Number,
        required: true
    }
});

const model_city = mongoose.model('City', cities);

module.exports = model_city;
