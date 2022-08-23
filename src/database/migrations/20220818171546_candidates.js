/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("candidates", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.integer("position_id").unsigned().references("id").inTable("positions").onDelete("CASCADE");
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("photo_path").notNullable().defaultTo("public.png")
    table.text("platform").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("candidates"); 
};
