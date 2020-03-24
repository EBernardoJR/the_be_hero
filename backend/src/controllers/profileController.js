//perfil da ong
const connection = require('../database/connection')


module.exports ={
    async index(req, res){
        const ong_id = req.headers.authorization

        const cas = await connection('cases').where('ong_id', ong_id).select('*')

        return res.json(cas)
    }
}