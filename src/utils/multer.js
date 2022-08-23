const multer = require('multer');
const fs = require("fs");

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
};

const storageCandidate = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }

        fs.access(dest, (error) => {
            if (error) {
                return fs.mkdir(dest, (error) => {
                    cb(error, dest)
                })
            } else {
                fs.readdir(dest, (error, files) => {
                    if (error) throw error

                    for (const file of files) {
                        fs.unlink(path.join(dest, file), error => {
                            if (error) throw error
                        })
                    }
                })

                return cb(uploadError, 'public/uploads/candidates')
            }
        })
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
});

const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }

        fs.access(dest, (error) => {
            if (error) {
                return fs.mkdir(dest, (error) => {
                    cb(error, dest)
                })
            } else {
                fs.readdir(dest, (error, files) => {
                    if (error) throw error

                    for (const file of files) {
                        fs.unlink(path.join(dest, file), error => {
                            if (error) throw error
                        })
                    }
                })

                return cb(uploadError, 'public/uploads/users')
            }
        })
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    }
});

const CandidateFile = multer({ storage: storageCandidate });
const UsersFile = multer({ storage: storageUser })


module.exports = {
    CandidateFile,
    UsersFile
}