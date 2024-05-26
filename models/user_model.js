const mongoose = require('mongoose');

const user = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    userName:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    cpassword:{
        type: String,
        require:true
    },

    
    
});

const model_user= mongoose.model('users', user);

module.exports = model_user