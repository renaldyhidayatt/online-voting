const knex = require("../database");


class PositionRepository{
    async findAll(){
        return await knex("positions").select("*");
    }
    
    async findById(id){
        return await knex("positions").where("id", id).first();
    }

    async create(data){
        return await knex("positions").insert({
            ...data
        })
    }

    async findByUpdate(id, data){
        return await knex("positions").where("id", id).update({
            ...data,
            updated_at: new Date(),
        })
    }

    async findByDelete(id){
        return await knex("positions").where("id", id).del();
    }


}

module.exports = new PositionRepository();