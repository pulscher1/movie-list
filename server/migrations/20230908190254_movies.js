/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('Title').notNullable();
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
      });
    };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
