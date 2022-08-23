const PositionRepository = require("../repository/repo.positions");

class PositionService{
    findAll(){
        return PositionRepository.findAll();
    }

    findById(id){
        return PositionRepository.findById(id)
    }

    create(data){
        return PositionRepository.create(data)
    }

    findByUpdate(id, data){
        return PositionRepository.findByUpdate(id, data)
    }

    findByDelete(id){
        return PositionRepository.findByDelete(id)
    }


    
}

module.exports = new PositionService();