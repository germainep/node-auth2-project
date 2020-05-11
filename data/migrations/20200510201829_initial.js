exports.up = function ( knex ) {
  knex.schema.createTable('users', ( table ) => {
    table.increments()
    table.text('username').notNullable()
    table.text('password').notNullable()
    table.string('department').notNullable()
  })
}

exports.down = function ( knex ) {
  knex.schema.dropTableIfExists('users')
}
