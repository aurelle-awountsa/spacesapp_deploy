require('dotenv').config();
const path = require('path')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Importer bodyParser
const { connect } = require('mongoose'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use(express.json);

const mongoURL = process.env.MONGO_URL;

const routeAddUser = require('./routes/adduser'); 
const routeAddSpace = require('./routes/addspace'); 
const routeShowSpace = require('./routes/showspace');
const routeGetCities = require('./routes/getcities');
const routeGetCathegorie = require('./routes/categorie');



//app.use(json()); // Middleware pour analyser les corps JSON

app.use('/spaces', routeShowSpace)
app.use('/spaces', routeAddSpace)
app.use('/cities', routeGetCities)
app.use('/categories', routeGetCathegorie)
app.use('/user', routeAddUser)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}else{
    app.get("/", (req, res)=>{
        res.send("<h1>Hello from Node Server</h1>");
    });
}

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Quelque chose a mal tourné!');
});

const port = process.env.PORT || 5000;
const HOST = '0.0.0.0';
app.listen(port, HOST, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
  });connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo DB connecté avec succes'))
    .catch(err => console.error(' Erreur de connecxion Mongo DB:', err));

module.exports = app; // Exporter l'application pour les tests ou d'autres utilisations
