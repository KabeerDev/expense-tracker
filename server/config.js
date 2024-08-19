const mongoose = require("mongoose");
const url = process.env.DB_URL;
mongoose.connect(url);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to db!")
})

module.exports = db;