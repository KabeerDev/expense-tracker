const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/expenseTracker";
mongoose.connect(url);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to db!")
})

module.exports = db;