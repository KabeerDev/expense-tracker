const conn = require("./../config");
const expense = require("./../model/Expense");
const user = require("./../model/Auth");

async function add(req, res) {
    try {
        const data = req.body;
        data.userid = req.user.id;
        const newExpense = new expense(data);
        const save = await newExpense.save();
        if (!save) return res.status(201).json({ success: false, message: "Something went wrong!" });
        return res.status(200).json({ success: true, message: `${data.type} added successfully!` });
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Internal server error!" });
    }
}
async function update(req, res) {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await expense.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!response) return res.status(404).json({ success: false, message: "Record does not exist!" });
        return res.status(200).json({ success: true, message: `Record updated!`, response });
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Internal server error!" });
    }
}
async function del(req, res) {
    try {
        const id = req.params.id;
        const response = await expense.findByIdAndDelete(id);
        if (!response) return res.status(404).json({ success: false, message: "Record does not exist!" });
        return res.status(200).json({ success: true, message: `Record deleted!`, response });
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Internal server error!" });
    }
}

module.exports = { add, update, del }