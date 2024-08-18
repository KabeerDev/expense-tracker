const express = require('express');
const app = express();
const port = 3000;
const authRouter = require("./routes/auth");
const expenseRouter = require("./routes/expense");
const infoRouter = require("./routes/info");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/expense", expenseRouter);
app.use("/info", infoRouter );

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});