const UserService = require("../services/service.user");
const HashPassword = require("../utils/hashpasssword");

class UserController{
    async findAll(req, res){
        const users = UserService.findAll()

        return res.json({
            message: users
        })
    }

    async findById(req, res){
        const users = UserService.findById(req.params.id);

        return res.json({
            message: users
        })
    }

    async create(req, res){
        const _user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: HashPassword.hashPassword(req.body.password),
            role_id: 2
        }

        UserService.create(_user).then((user) => {
            return res.json({
                message: `Successfully`,
                data: user
            })
        }).catch((err) => {
            return res.json({
                message: `Error Bad Request: ${err}`
            })
        })
    }

    async findByUpdate(req, res){
        const user_ = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            role_id: 2
        }
        UserService.update(req.params.id, user_).then((user) => {
            return res.json({
                data: user
            })

        }).catch((err) => {
            return res.json({
                message: `Error Bad Request: ${err}`
            })
        })

    }

    async findByDelete(req, res){
        const user_ = await UserService.deleteUser(req.params.id);

        return res.json({
            message: `Successfully`,
            data: user_
        })
    }

}

module.exports = new UserController();