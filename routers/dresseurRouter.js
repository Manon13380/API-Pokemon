const dresseurRouter = require("express").Router()
const dresseurController = require('../controllers/dresseurController')

dresseurRouter.get('/dresseurs', dresseurController.getDresseurs)
dresseurRouter.get('/dresseurs/:id', dresseurController.getOneDresseur)
dresseurRouter.post('/dresseur', dresseurController.postDresseur)
dresseurRouter.put('/dresseurs/:id', dresseurController.updateDresseur)
dresseurRouter.delete('/dresseurs/:id', dresseurController.deleteDresseur)
module.exports = dresseurRouter