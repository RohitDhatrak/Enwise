const bcrypt = require("bcrypt");

async function encrypt(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

async function matchPasswords(encryptedPassword: string, password: string) {
    return bcrypt.compare(password, encryptedPassword);
}

module.exports = { encrypt, matchPasswords };
