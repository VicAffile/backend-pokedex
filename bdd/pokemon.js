const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pokemonSchema = new Schema({
    numero: { type: String },
    nom_fr: { type: String },
    nom_jap: { type: String },
    mignature: { type: String },
    sprite: { type: String },
    type: { type: Array },
    categorie: { type: String },
    taille: { type: String },
    poids: { type: String },
    talent: { type: Array },
    groupe_oeuf: { type: Array },
    pas_eclosion: { type: String },
    nom_preevolution: { type: String },
    nom_evolution: { type: Array },
    condition_evolution: { type: Array },
    description: { type: String },
});

pokemonSchema.statics.recuperer = async() => {
    const pokemons = await Pokemon.find({});
    if (!pokemons) {
        console.log('Pokémons introuvables.');
        return false;
    }
    return pokemons;
}

pokemonSchema.statics.recuperer_pokemon = async(nom) => {
    const pokemon = await Pokemon.find({ "nom_fr": nom });
    if (!pokemon) {
        console.log('Pokémon introuvable.');
        return false;
    }
    return pokemon;
}

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;