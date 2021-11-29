const bcrypt = require("bcrypt");

async function encrypt(password) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

async function matchPasswords(encryptedPassword, password) {
    return bcrypt.compare(password, encryptedPassword);
}

module.exports = { encrypt, matchPasswords };
