const mongoose = require("mongoose");

const currentDate = new Date();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const day = currentDate.getDate();
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();
const formattedDate = `${month} ${day}, ${year}`;


const expenseScheme = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["expense", "income"],
    },
    amount: {
        type: Number,
        required: true,
    },
    note: {
        type: String,
        default: "",
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: String,
        default: formattedDate,
    },
});

const expense = mongoose.model("expense", expenseScheme);

module.exports = expense;