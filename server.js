const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dresseurRouter = require('./routers/dresseurRouter')
const pokemonRouter = require('./routers/pokemonRouter')
const app = express()

app.use(cors())
app.use(express.json())
app.use(dresseurRouter)
app.use(pokemonRouter)

app.listen(3000, (err) => {
    if (!err) { console.log("Connecté au serveur") }
    else { console.log(err) }
})

mongoose.connect("mongodb://localhost:27017/apiPokemon")