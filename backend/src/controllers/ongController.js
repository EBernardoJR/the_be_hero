const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {



    async index (req, res){
        const ongs = await connection('ongs').select('*') //vai selecionar todas as ongs
    
        return res.json(ongs)
    },

    async create(req, res){
           //return res.send(req.params.id)
    const { name, email, whatsapp, city, uf } = req.body
    const id = crypto.randomBytes(4).toString('HEX')//gerando id aleatorio
    //inserindo os dados
    await connection('ongs').insert({
        id,
        name, 
        email,
        whatsapp,
        city,
        uf
    }).then(()=>{
        console.log('ong cadastrada')
    }).catch(err =>{
        console.log(`Ocorreu um erro: ${err}`)
    })


    return res.json({ id })
    }
}