
exports.up = function(knex) {
    return knex.schema.createTable('cases', function(table){
        table.increments()
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        table.string('city').notNullable()

        //a ong associada
        table.string('ong_id').notNullable()

        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs')
        //a campo ong_id referencia o campo id da tabela ongs
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cases')
};
