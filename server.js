const express = require("express");
const taskRouter = require("./routes/task.routes");
const authRouter = require("./routes/auth.routes");
const connectDB = require("./config/database");
const app = express();
require("dotenv").config()

connectDB();

app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);


app.listen(3000, (err) => {
    if (!err) {
        console.log('Server start')
    }
})