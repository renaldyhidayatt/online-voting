// const { decodeJwt } = require("../utils/jwt");
const TokenJwt = require("../utils/jwt");

function authMiddleware (req, res, next) {
    let token = req.header("Authorization");
    if (!token) return res.status(401).send("Access Denied, no token provided");

    try {

        const { id, err} = TokenJwt.decodeJwt(token.split("Bearer ")[1]);

        if(err){
            return res.status(400).json({
                message: `Error Bad Request: ${err}`
            })
        }

        req.userId = id;

        next();
    } catch (err) {
        res.status(400).send(`Invalid token. message ${err}`)
    }
}

module.exports = authMiddleware