const knex = require("../database");

class VoteRepository{
    async findAll(){
        return await knex("votes").select("*");

    }

    async findById(id){
        return await knex("votes").where("id",id).select("*")
    }

    async create(data){
        return await knex("votes").insert({
            ...data
        })
    }
    async findByUpdate(id, data){
        return await knex("votes").where("id", id).update({
            ...data
        })
    }

    async findByDelete(id){
        return await knex("votes").where("id", id).del()
    }
}

module.exports = new  VoteRepository();