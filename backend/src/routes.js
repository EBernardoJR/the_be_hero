const express = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController')
const casesController = require('./controllers/casesController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')


//listagem das rotas
routes.get('/ongs',  ongController.index )

//criar uma ong
routes.post('/ongs', ongController.create )

routes.get('/profile', profileController.index)
//login
routes.post('/session', sessionController.create)

//criação de case
routes.post('/cases', casesController.create)
routes.get('/cases', casesController.index)
//deletar caso
routes.delete('/cases/:id', casesController.delete)

module.exports = routes