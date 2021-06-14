const express = require("express");
const router = express.Router();

//router to users
router.use("/users", require("./users"));

//router to tasks
router.use("/tasks", require("./tasks"));

module.exports = router;
