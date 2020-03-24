
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()//segundo parametro é o tamanho do texto q vai ser salvo
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')//se der erro vai deletar a tabela
};
