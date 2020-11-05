const bcrypt = require('bcrypt');

function hashPass(pwd) {

    bcrypt.hash(pwd, 10, (err, hash) => {
        if(err) {
            throw err;
        } else {
            console.log(pwd)
            return hash;
        }
    });
}

function comparePass(pwd) {

    bcrypt.compare(pwd, hash, (err, res) => {
        if (res) {
            return true;
        } else {
            return false;
        }

    });
}

module.exports.hashPass = hashPass;
module.exports.comparePass = comparePass;