const pokemonRouter = require("express").Router()
const pokemonController = require('../controllers/pokemonController')

pokemonRouter.post('/dresseurs/:idDresseur/pokemons', pokemonController.postPokemon)
pokemonRouter.get('/pokemons', pokemonController.getPokemons)
pokemonRouter.get('/pokemons/:id', pokemonController.getOnePokemon)
pokemonRouter.delete('/dresseurs/:idDresseur/pokemons/:idPokemon', pokemonController.deletePokemon)
pokemonRouter.put('/pokemons/:id', pokemonController.updatePokemon)
module.exports = pokemonRouter