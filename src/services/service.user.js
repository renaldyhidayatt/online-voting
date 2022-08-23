const UserRepository = require("../repository/repo.user");

class UserService{
    findAll(){
        return UserRepository.findAll();
    }

    findById(id){
        return UserRepository.findById(id)
    }

    findByUsername(username){
        return UserRepository.findByUsername(username);
    }

    create(user){
        return  UserRepository.createUser(user);
    }

    update(id, user){
        return UserRepository.update(id, user)
    }

    deleteUser(id){
        return UserRepository.deleteUser(id)
    }
}

module.exports = new UserService();