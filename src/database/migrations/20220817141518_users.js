/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary().unsigned().unique().notNullable();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.string("photo_path").defaultTo("public.png");
    table
      .integer("role_id")
      .unsigned()
      .references("id")
      .inTable("user_role")
      .onDelete("CASCADE");
    table.datetime("created_at").notNullable().defaultTo(knex.fn.now())
    table.datetime("updated_at").nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("users");
};
