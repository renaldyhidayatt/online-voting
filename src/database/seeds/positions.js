/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('positions').del()
  await knex('positions').insert([
    {
      description: "Sample",
      max_vote: 2,
      priority: 1
    }
  ]);
};
