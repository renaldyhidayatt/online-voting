const CandidateRepository = require("../repository/repo.candidate");

class CandidateService{
    findAll(){
        return CandidateRepository.findAll();
    }
    
    findById(id){
        return CandidateRepository.findById(id)
    }

    create(data){
        return CandidateRepository.create(data)
    }

    findByUpdate(id, data){
        return CandidateRepository.findByUpdate(id, data)
    }

    findByDelete(id){
        return CandidateRepository.findByDelete(id)
    }
}

module.exports = new CandidateService();