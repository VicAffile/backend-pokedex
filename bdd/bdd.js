const mongoose = require("mongoose");
require('dotenv').config();

const UTILISATEUR = process.env.BDD_UTILISATEUR;
const MOTDEPASSE = process.env.BDD_MOTDEPASSE;

mongoose.connect("mongodb+srv://" + UTILISATEUR + ":" + MOTDEPASSE + "@pokemon.svi0i.mongodb.net/pokedex");

let connection = mongoose.connection;

connection.on("error", console.error.bind(console, 'Erreur lors de la connexion'));
connection.once('open', () => { console.log("Connexion à la base OK"); });

module.exports = connection;