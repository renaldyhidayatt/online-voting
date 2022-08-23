const knex = require("../database");


class UserRepository{
    async findAll(){
        const users =  await knex("users").select("*");
        return users;
    }
    
    async findById(userid){
        const user =  await knex("users").where("id", userid).first()
        return user
        
    }

    async findByUsername(username){
        const user = await knex("users").where("username", username).first()

        return user
    }

    async createUser(user){
        const create = await knex("users").insert({
            ...user
        })
    
        return create
    }
    async update(id, user){
        const update = await knex("users").where("id", id).update({
            ...user,
            updated_at: new Date()
        })

        return update
    }

    async deleteUser(id){
        const deleteUser = await knex("users").where("id", id).del();
        return deleteUser; 
    }


}


module.exports = new UserRepository();