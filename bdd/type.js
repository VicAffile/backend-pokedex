const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let typeSchema = new Schema({
    nom: { type: String },
    image: { type: String },
});

typeSchema.statics.recuperer = async() => {
    const types = await Type.find({});
    if (!types) {
        console.log("Types introuvables.");
        return false;
    }
    return types;
}

typeSchema.statics.recuperer_type = async(nom) => {
    const type = await Type.find({ "nom": nom });
    if (!type) {
        console.log("Type introuvable.");
        return false;
    }
    return type;
}

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;