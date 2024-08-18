const express = require("express");
const router = express.Router();
const { restrictUser } = require("./../middleware/auth");
const expense = require("./../model/Expense");

router.get("/", restrictUser, async (req, res) => {
    try {
        const id = req.user.id;
        if (!id) return res.status(404).json({ success: false, message: "Something went wrong!" });
        const info = await expense.find({ userid: id });
        if (!info) return res.status(500).json({ success: false, mmessage: "something went wrong!" })
        return res.json({ info, success: true });
    } catch (err) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.get("/:id", restrictUser, async (req, res) => {
    try {
        const id = req.params.id;
        const details = await expense.findById(id);
        return res.json(details);
    } catch (err) {
        return res.status(500).json({ success: false, message: "Intenal server error" })
    }
});

module.exports = router;