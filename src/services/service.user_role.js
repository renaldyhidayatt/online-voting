const UserRoleRepository = require("../repository/repo.user_role");

class UserRoleService{
    findAll(){
        return UserRoleRepository.findAll();
    }
    findById(id){
        return UserRoleRepository.findById(id);
    }

    create(role){
        return UserRoleRepository.create(role);
    }

    update(id,role){
        return UserRoleRepository.update(id, role);
    }

    deleteRole(id){
        return UserRoleRepository.deleteRole(id);
    }
}

module.exports = new UserRoleService();