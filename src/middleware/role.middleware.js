const UserRepository = require("../repository/repo.user");
const UserRoleRepository = require("../repository/repo.user_role");

module.exports = async function(req, res, next){
    let user = req.userId

    if(!user) return res.status(401).send("Access Denied, request user")

    try{
        const repousers = await UserRepository.findById(req.userId);
        const reporole = await UserRoleRepository.findById(repousers.role_id);

        console.log(repousers.role_id)
        if(reporole.name == "admin"){
            return next();
        }else{
            return res.json({
                message: "Bad Request role"
            })
        }
    }catch(err){
        return res.status(404).json({
            message: `Bad Request: ${err}`
        })
    }
}