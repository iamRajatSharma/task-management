const express = require("express");
const taskRouter = require("./task.routes");
const authRouter = require("./auth.routes");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/task", taskRouter);

module.exports = router;
