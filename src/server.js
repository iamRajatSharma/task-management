const express = require("express");
const connectDB = require("./config/database");
const router = require("./routes/index.routes");
const app = express();
require("dotenv").config()

connectDB();

app.use(express.json())
app.use("/api", router)
// app.use("/api/auth", authRouter);
// app.use("/api/task", taskRouter);


app.listen(3000, (err) => {
    if (!err) {
        console.log('Server start')
    }
})