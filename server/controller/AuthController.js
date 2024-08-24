const user = require("./../model/Auth")
const conn = require("./../config");
const { verifyUser, generateToken, verifyToken } = require("./../service/auth")

async function signupController(req, res) {
    try {
        const data = req.body;
        const checkUser = await user.findOne({ email: data.email });
        if (checkUser) return res.status(404).json({ success: false, message: "user already exist!" });
        const newUser = new user(data);
        const save = await newUser.save();
        if (!save) return res.status(404).json({ success: false, message: "Something went wrong!" });
        const userData = await verifyUser(data.email, data.password);
        if (!userData) return res.status(404).json({ success: false, message: "Invalid credentials" });
        const token = await generateToken(userData._id, userData.name, userData.email);
        if (!token) return res.status(404).json({ success: false, message: "Something went wrong!" });
        return res.status(200).json({ token });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

async function loginController(req, res) {
    try {
        const data = req.body;
        const userData = await verifyUser(data.email, data.password);
        if (!userData) return res.status(404).json({ success: false, message: "Invalid credentials" });
        const token = await generateToken(userData._id, userData.name, userData.email);
        if (!token) return res.status(404).json({ success: false, message: "Something went wrong!" });
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

async function getUserController(req, res) {
    try {
        const user = req.user;
        return res.status(201).json({ user })
    } catch (err) {
        return res.status(404).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { signupController, loginController, getUserController };