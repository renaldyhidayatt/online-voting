const CandidateService = require("../services/service.candidate");

class CandidateController{
    async findAll(req, res){
        const candidate = await CandidateService.findAll();

        return res.json({
            message: "Successfully",
            data: candidate
        })
    }

    async findById(req, res){
        const candidate = await CandidateService.findById(id)

        return res.json({
            message: "Successfully",
            data: candidate
        })
    }

    async create(req, res){
        const file = req.file
        if(!file){
            return res.status(400).json({
                message: "Error File"
            })
        }
        const fileName = file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

        const _c = {
            position_id: req.body.position_id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            platform: req.body.platform,
            photo_path: `${basePath}${fileName}`
        }

        await CandidateService.create(_c)

        return res.json({
            message: "Successfully"
        })
    }

    async findByUpdate(req, res){
        const candidate = CandidateService.findById(req.params.id)
        const file = req.file;
        let imagepath;
        if(!candidate){
            return res.json({
                message: "Bad Request your id"
            })
        }

        if (file) {
            const fileName = file.filename;
            const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
            imagepath = `${basePath}${fileName}`;
        } else {
            imagepath = candidate.photo_path;
        }

        const _c = {
            position_id: req.body.position_id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            platform: req.body.platform,
            photo_path: imagepath
        }

        await CandidateService.findByUpdate(id, _c)

        return res.json({
            message: "Successfully"
        })
    }

    async findByDelete(req, res){
        await CandidateService.findByDelete(id)

        return res.json({
            message: "Successfully"
        })
    }
}

module.exports = new CandidateController();