const express = require('express');

const db = require('./bdd/bdd');
const Pokemon = require('./bdd/pokemon');
const Type = require('./bdd/type');

const app = express();

app.get('/', async(req, res) => {
    const pokemons = await Pokemon.recuperer();
    let liste = [];
    pokemons.forEach((pokemon) => {
        liste.push({
            "numero": pokemon.numero,
            "nom_fr": pokemon.nom_fr,
            "nom_jap": pokemon.nom_jap,
            "type": pokemon.type
        });
    });
    const reponse = JSON.stringify(liste);
    res.send(reponse);
});

app.get('/:pokemon', async(req, res) => {
    const nom = req.params.pokemon;
    const pokemon = await Pokemon.recuperer_pokemon(nom);
    const reponse = JSON.stringify(pokemon);
    console.log(reponse);
    res.send(reponse);
});

app.get('/:pokemon/mignature', async(req, res) => {
    const nom = req.params.pokemon;
    const pokemon = await Pokemon.recuperer_pokemon(nom);
    res.sendFile("publique/images/mignatures/" + pokemon[0].mignature, { root: __dirname });
})

app.get('/:pokemon/sprite', async(req, res) => {
    const nom = req.params.pokemon;
    const pokemon = await Pokemon.recuperer_pokemon(nom);
    res.sendFile("publique/images/sprites/" + pokemon[0].sprite, { root: __dirname });
})

app.get('/types/:type', async(req, res) => {
    const nom = req.params.type;
    const type = await Type.recuperer_type(nom);
    const reponse = JSON.stringify(type);
    console.log(reponse);
    res.send(reponse);
})

app.get('/types/:type/image', async(req, res) => {
    const nom = req.params.type;
    const type = await Type.recuperer_type(nom);
    res.sendFile("publique/images/types/" + type[0].image, { root: __dirname });
})

app.listen(process.env.PORT || 8000);
console.log("L'application tourne.");