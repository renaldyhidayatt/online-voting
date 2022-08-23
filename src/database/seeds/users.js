const Hashing = require("../../utils/hashpasssword");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
     
      firstname: "admin",
      lastname: "knex",
      username: "admin_knex",
      password: Hashing.hashPassword("dota2"),
      role_id: 1
    },
    {
      
      firstname: "voting",
      lastname: "knex",
      username: "voting_knex",
      password: Hashing.hashPassword("dota2"),
      role_id: 2
    }
  ]);
};
