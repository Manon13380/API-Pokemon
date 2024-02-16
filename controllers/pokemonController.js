const pokemonModel = require('../models/pokemonModel')
const dresseurModel = require('../models/dresseurModel')

exports.postPokemon = async (req, res) => {
    try {
        const dresseur = dresseurModel.findOne({ _id: req.params.idDresseur })
        if (dresseur) {
            const newPokemon = new pokemonModel(req.body)
            newPokemon.validateSync()
            await newPokemon.save()
            await dresseurModel.updateOne({ _id: req.params.idDresseur }, { $push: { pokemons: newPokemon._id } })
            res.json("Le Pokemon a été bien créé et associé à son dresseur")
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.getPokemons = async (req, res) => {
    try {
        let pokemons = null
        if (req.query.type) {
            pokemons = await pokemonModel.find({ type: req.query.type })
            res.json(pokemons)
        } else {
            pokemons = await pokemonModel.find()
            res.json(pokemons)
        }
    } catch (error) {
        res.json(error.message)
    }
}

exports.getOnePokemon = async (req, res) => {
    try {
        const pokemon = await pokemonModel.findOne({ _id: req.params.id })
        res.json(pokemon)
    } catch (error) {
        res.json(error.message)
    }
}

exports.deletePokemon = async (req, res) => {
    try {
        const dresseur = dresseurModel.findOne({ _id: req.params.idDresseur })
        if (dresseur) {
            const pokemonDeleted = await pokemonModel.deleteOne({ _id: req.params.idPokemon })
            await dresseurModel.updateOne({ _id: req.params.idDresseur }, { $pull: { pokemons: req.params.idPokemon } })
            res.json(pokemonDeleted)
        }
    } catch (error) {
        res.json(error.message)
    }
}
exports.updatePokemon = async (req, res) => {
    try {
        const pokemonUpdated = await pokemonModel.updateOne({ _id: req.params.id }, req.body)
        res.json(pokemonUpdated)
    } catch (error) {
        res.json(error.message)
    }
}