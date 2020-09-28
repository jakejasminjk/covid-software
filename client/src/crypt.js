const bcrypt = require('bcrypt');

function hashPass(pwd, user) {

    bcrypt.hash(pwd, 10, (err, hash) => {
        // Store in db here
    });
}

function comparePass(pwd) {

    bcrypt.compare(pwd, hash, (err, res) => {
        if (res) {
            // Password matched
        } else {
            // Wrong password
        }

    });

}