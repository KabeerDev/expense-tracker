const express = require("express");
const router = express.Router();
const { add, update, del } = require("./../controller/ExpenseController");
const { restrictUser } = require("./../middleware/auth");

router.post("/add", restrictUser, add);
router.put("/update/:id", restrictUser, update);
router.delete("/delete/:id", restrictUser, del);

module.exports = router;