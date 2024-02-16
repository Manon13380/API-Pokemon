const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom du Pokemon est requis"]
    },
    type: {
        type: String,
        required: [true, "le type du pokemon est requis"]
    },
    level: {
        type: Number,
        required: [true, "Le niveau de puissance est requis"]
    },
    attacks: {
        type: Array,
        required:[true,"Les attaques sont requises"]
    }
})

const pokemonModel = mongoose.model("pokemons", pokemonSchema)
module.exports = pokemonModel 