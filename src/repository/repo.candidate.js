const knex = require("../database");

class CandidateRepository{
    async findAll(){
        return await knex("candidates").select("*");
    }

    async findById(id){
        return await knex("candidates").where("id", id).first()
    }

    async create(data){
        return await knex("candidates").insert({
            ...data
        })
    }

    async findByUpdate(id, data){
        return await knex("candidates").where("id", id).update({
            ...data,
            updated_at: new Date()
        })
    }

    async findByDelete(id){
        return await knex("candidates").where("id", id).del();
    }
}

module.exports = new CandidateRepository();