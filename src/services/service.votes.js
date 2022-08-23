const VoteRepository = require("../repository/repo.votes");

class VoteService{
    findAll(){
        return VoteRepository.findAll()
    }

    findById(id){
        return VoteRepository.findById(id)
    }

    create(data){
        return VoteRepository.create(data)
    }

    findByUpdate(id, data){
        return VoteRepository.findByUpdate(id, data)
    }

    findByDelete(id){
        return VoteRepository.findByDelete(id)
    }
}

module.exports = new VoteService();