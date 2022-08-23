const UserRoleService = require("../services/service.user_role");



class UserRoleController{
    async findAll(req, res){
        const user_role = await UserRoleService.findAll();

        return res.json({
            message: "Successfully",
            data: user_role
        })
    }

    async findId(req, res){
        const user_role = await UserRoleService.findById(req.params.id);

        return res.json({
            message: "SUccessfully",
            data: user_role
        })

    }

    async findByUpdate(req, res){
        const { name, description } = req.body;

        const role = {
            name: name,
            description: description
        }

        const user_role = await UserRoleService.update(req.params.id, role)

        return res.json({
            message: "Successfully",
            data: user_role
        })
    }

    async findByDelete(req, res){
        
        const user_role = await UserRoleService.deleteRole(req.params.id)

        return res.json({
            message: "Successfully",
            data: user_role
        })
    }



}

module.exports = new UserRoleController();