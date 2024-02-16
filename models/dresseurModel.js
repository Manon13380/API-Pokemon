const mongoose = require('mongoose');

const dresseurSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Le nom du Dresseur est requis"]
    },
    age: {
        type: Number,
        required: [true, "L'âge du dresseur est requis"]
    },
    pokemons: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: "pokemons"
        }
        ]
    }
})

const dresseurModel = mongoose.model("dresseurs", dresseurSchema)
module.exports = dresseurModel