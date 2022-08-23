/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("positions", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("description").notNullable();
    table.integer("max_vote").notNullable();
    table.integer("priority").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("positions")
};
