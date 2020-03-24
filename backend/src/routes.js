const express = require('express')

const routes = express.Router()

routes.get('/user/:id', (req, res)=>{
    //return res.send(req.params.id)

})

module.exports = routes