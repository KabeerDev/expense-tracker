const jwt = require("jsonwebtoken");
const user = require("./../model/Auth");
const bcrypt = require("bcrypt");
const secret = "auth@1232";

async function verifyUser(email, password) {
    const person = await user.findOne({ email: email });
    if (person) {
        const verifyPass = await bcrypt.compare(password, person.password);
        if (verifyPass) {
            return person;
        }
    }
}

async function generateToken(id, name, email) {
    const payload = { id: id, name: name, email: email };
    const token = jwt.sign(payload, secret, { expiresIn: '30d' });
    return token;
}

async function verifyToken(token) {
    const decode = jwt.verify(token, secret);
    return decode;
}

module.exports = { verifyUser, generateToken, verifyToken }