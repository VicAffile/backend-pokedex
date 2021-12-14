const express = require('express');
const bodyParser = require('body-parser');
const db = require('./bdd/bdd');
const Pokemon = require('./bdd/pokemon');

const app = express();

app.get('/', async(req, res) => {
    const pokemons = await Pokemon.recuperer();
    let liste = [];
    pokemons.forEach((pokemon) => {
        liste.push({
            "numero": pokemon.numero,
            "nom": pokemon.nom_fr,
            "type": pokemon.type
        });
    });
    const reponse = JSON.stringify(liste);
    console.log(reponse);
    res.send(reponse);
});

app.get('/:pokemon', async(req, res) => {
    const nom = req.params.pokemon;
    const pokemon = await Pokemon.recuperer_pokemon(nom);
    const reponse = JSON.stringify(pokemon);
    console.log(reponse);
    res.send(reponse);
});

app.listen(process.env.PORT || 8000);
console.log("L'application tourne.");