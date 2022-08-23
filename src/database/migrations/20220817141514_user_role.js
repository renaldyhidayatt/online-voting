/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("user_role", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("name").notNullable();
    table.string("description").nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("user_role");
};
