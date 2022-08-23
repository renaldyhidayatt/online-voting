const PositionService = require("../services/service.position");

class PositionController{
    async findAll(req, res){
        const position = await PositionService.findAll()

        return res.json({
            message: "Success",
            data: position
        })
    }

    async findById(req, res){
        const position = await PositionService.findById(req.params.id);

        return res.json({
            message: "Success",
            data: position
        })
    }

    async create(req, res){
        const data = {
            description: req.body.description,
            max_vote: req.body.max_vote,
            priority: req.body.priority
        }
        const position = await PositionService.create(data)

        return res.json({
            message: "Success",
            data: position
        })
    }

    async findByUpdate(req, res){
        const data = {
            description: req.body.description,
            max_vote: req.body.max_vote,
            priority: req.body.priority
        }
        const position = await PositionService.findByUpdate(req.params.id, data)

        return res.json({
            message: "Success",
            data: position
        })

    }

    async findByDelete(req, res){
        const position = await PositionService.findByDelete(req.params.id)

        return res.json({
            message: "Success",
            data: position
        })
    }
}

module.exports = new PositionController();