const user = require("./../model/Auth.js");
const { verifyToken } = require("./../service/auth");

async function restrictUser(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(404).json({ success: false, message: "Please login first!" });

    const userData = await verifyToken(token)
    if (!userData) return res.status(404).json({ success: false, message: "Invalid session login again!" });

    req.user = userData;
    next();
}

module.exports = { restrictUser };