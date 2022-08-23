/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_role').del()
  await knex('user_role').insert([
    {
     
      name: "admin",
      description: "admin adalah"
    },
    {
      
      name: "voting",
      description: "voting adalah"
    }
  ]);
};
