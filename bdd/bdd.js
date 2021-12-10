require('dotenv').config();

const UTILISATEUR = process.env.BDD_UTILISATEUR;
const MOTDEPASSE = process.env.BDD_MOTDEPASSE;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://" + UTILISATEUR + ":" + MOTDEPASSE + "@pokemon.svi0i.mongodb.net/pokemon", {

});

let connection = mongoose.connection;

connection.on("error", console.error.bind(console, 'Erreur lors de la connexion'));
connection.once('open', () => { console.log("Connexion à la base OK"); });

module.exports = connection;