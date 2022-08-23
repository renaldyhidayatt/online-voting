const knex = require("../database");


class UserRoleRepository{
    async findById(id){
        const role = knex("user_role").where("id", id).first();
        
        return role

    }
    async findAll(){
        const role = await knex("user_role").select("*");
        return role
    }
    async create(role){
        const user = await knex("user_role").insert({
            ...role
        })

        return user;
    }

    async update(id, role){
        const user = await knex("user_role").where("id", id).update({
            ...role,
            updated_at: new Date()
        })
        return user
    }
    async deleteRole(id){
        const role = await knex("user_role").where("id", id).del();
        return role;
    }
}



module.exports = new UserRoleRepository();