const express = require("express");
const router = express.Router();
const { signupController, loginController, refreshToken, getUserController } = require("./../controller/AuthController");
const { restrictUser } = require("./../middleware/auth");

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/me", restrictUser, getUserController);

module.exports = router;