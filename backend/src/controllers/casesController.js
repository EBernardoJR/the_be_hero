const connection = require('../database/connection')

module.exports = {
    async create(req, res){
        const { title, description, value } = req.body
        //qual ong logada
        const ong_id = req.headers.authorization

        const [id] = await connection('cases').insert({
            title,
            description,
            value,
            ong_id
        })
        return res.json({ id })
    },
    //listar todos
    async index(req, res){
        //listagem  e paginação
        const { page = 1 } = req.query

        const [count] = await connection('cases').count()
        //retornar so o numero (mesma coisa q count[0]) ja q ele por padrao so retornar array
        console.log(count)

        const cases = await connection('cases')
            .join('ongs', 'ongs.id', '=', 'cases.ong_id')//relacionar dados de duas tabelas(vai trazer a ong cujo o id seja igual ao id que está registrado no caso)
            .limit(5)//pegar 5 paginas
            .offset((page -1) * 5)//os 5 primeiros de cada pag
            .select(['cases.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])//so vai por na resposta os campos selecionados

        //colocando na resposta o total (ficará disponivel no header)
        res.header('x-total-count', count['count(*)'])

        return res.json(cases)
    },


    async delete(req, res){
        const { id } = req.params
        //ong logada
        const ong_id = req.headers.authorization

        //buscar o case para verificar se a ong que deseja excluir foi a que cadastrou
        const caso = await connection('cases').where('id', id).select('ong_id').first()//vai selecionar a coluna ong_id

        if(caso.ong_id !== ong_id){
            return res.status(401).json({ error: 'Operation not permited'})//not authorization
        }
    
        //caso a ong tenha criado o caso
        await connection('cases').where('id', id).delete()

        return res.status(204).send()
    }
}