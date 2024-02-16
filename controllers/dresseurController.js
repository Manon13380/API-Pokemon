const dresseurModel = require('../models/dresseurModel')

exports.getDresseurs = async (req, res) => {
    try {
        const dresseurs = await dresseurModel.find().populate("pokemons")
        res.json(dresseurs)
    } catch (error) {
        res.json(error.message)
    }
}

exports.getOneDresseur = async (req, res) => {
    try {
        const dresseur = await dresseurModel.findOne({ _id: req.params.id}).populate("pokemons")
        res.json(dresseur)
    } catch (error) {
        res.json(error.message)
    }
}

exports.postDresseur = async (req, res) => {
    try {
        const newDresseur = new dresseurModel(req.body)
        newDresseur.validateSync()
        await newDresseur.save()
        res.json("Le dresseur a bien été créé")
    } catch (error) {
        res.json(error.message)
    }
}

exports.updateDresseur = async (req, res) => {
    try {
        const dresseurUpdated = await dresseurModel.updateOne({ _id: req.params.id }, req.body)
        res.json(dresseurUpdated)
    } catch (error) {
        res.json(error.message)
    }
}

exports.deleteDresseur = async (req, res) => {
    try {
        const dresseurDeleted = await dresseurModel.deleteOne({ _id: req.params.id })
        res.json(dresseurDeleted)
    } catch (error) {
        res.json(error.message)
    }
}

