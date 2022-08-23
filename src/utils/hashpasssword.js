const bcryptjs = require("bcryptjs");

class PasswordEncryption{
    hashPassword = (password) => {
        return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
    };
    comparePassword = (password, hash) => {
        return bcryptjs.compareSync(password, hash);
    }
}

module.exports = new PasswordEncryption();