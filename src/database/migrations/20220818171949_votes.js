/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("votes", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
    table.integer("candidate_id").unsigned().references("id").inTable("candidates").onDelete("CASCADE");
    table.integer("position_id").unsigned().references("id").inTable("positions").onDelete("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("votes");
};
