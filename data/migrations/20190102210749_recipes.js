
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl.integer('user_id').notNullable();
      tbl.string('name', 250).notNullable();
      tbl.string('link', 100).notNullable();
      tbl.string('tag', 50);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
