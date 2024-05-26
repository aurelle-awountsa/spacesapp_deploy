const mongoose = require("mongoose");
const dbPassword = process.env.DB_PASSWORD;
var mongoURL = 'mongodb+srv://he201883:'+ dbPassword+'@spaces.yifitlw.mongodb.net/Spaces_App';
//const mongoURL = "mongodb+srv://he201883:dbPassword@spaces.eoorffo.mongodb.net/";

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected', () => {
    console.log('Mongo DB connection successful')
})

module.exports = mongoose