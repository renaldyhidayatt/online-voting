const TokenJwt = require("../utils/jwt");
const HashPassword = require("../utils/hashpasssword")
const UserService = require("../services/service.user");

class AuthController {
    async register(req, res) {
        const { firstname, lastname, username, password } = req.body;

        try {
            const users = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: HashPassword.hashPassword(password),
                role_id: 2
            }
            if (!UserService.findByUsername(username)) {
                return res.json({
                    message: "Username Already exits"
                })
            }

            await UserService.create(users);

            return res.json({
                message: "Success"
            })
        } catch (err) {
            return res.status(500).json({
                message: `Error ${err}`
            })
        }
    }
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const findUsername = await UserService.findByUsername(username)

            if (!findUsername) {
                return res.json({
                    message: "Username not found"
                })
            }
            console.log(findUsername)

            if (!HashPassword.comparePassword(password, findUsername.password)) {
                throw new Error("Wrong your password brother")
            }

            const token = TokenJwt.createJwt(findUsername.id);

            return res.json({
                message: "Success",
                token: token
            })


        } catch (err) {
            return res.status(400).json({
                messsage: `Error ${err}`
            })
        }

    }
}

module.exports = new AuthController();