const jwt = require("jsonwebtoken");

class Jsontoken {


    createJwt(id) {
        const secret = process.env.SECRET;
        const jwtExpire = process.env.JWT_EXPIRY_TIME;
        try {
            if (!secret) {
                throw new Error("Error Secret Env");
            }
            if (!jwtExpire) {
                throw new Error("Expire Jwt let go login go gain");
            }

            return jwt.sign(
                {
                    id: id,
                },
                secret,
                {
                    expiresIn: jwtExpire,
                }
            );
        } catch (err) {
            return new Error(err);
        }
    }

    decodeJwt(token) {
        const secret = process.env.SECRET;
        try {
            if (!secret) {
                return new Error("No JWT SECRET");
            }
            return jwt.verify(token, secret);
        } catch (err) {
            return { err }
        }
    }
}

module.exports = new Jsontoken();