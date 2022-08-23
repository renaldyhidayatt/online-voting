const VoteService = require("../services/service.votes");

class VoteController{

    async findAll(req, res){
        const votes = await VoteService.findAll()

        return res.json({
            message: "Success",
            data: votes
        })
    }

    async findById(req, res){
        const votes = await VoteService.findById(req.params.id)

        return res.json({
            message: "Success",
            data: votes
        }) 
    }

    async create(req, res){
        const _k = {
            user_id: req.body.user_id,
            candidate_id: req.body.candidate_id,
            position_id: req.body.position_id
        }

        await VoteService.create(_k)

        return res.json({
            message: "Success"
        })
    }

    async findByUpdate(req, res){
        const _k = {
            user_id: req.body.user_id,
            candidate_id: req.body.candidate_id,
            position_id: req.body.position_id
        }
        
        await VoteService.findByUpdate(req.params.id, data);

        return res.json({
            message: "Success"
        })
    }

    async findByDelete(req, res){
        await VoteService.findByDelete(req.params.id);

        return res.json({
            message: "Success"
        })
    }

    async findByUpdate(req, res){

    }

    async findByDelete(req, res){

    }
}

module.exports = new VoteController();