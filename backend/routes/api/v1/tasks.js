const express = require("express");
const router = express.Router();
const passport = require("passport");
const tasksApi = require("../../../controllers/api/v1/tasks_api");

//router handling read request
router.get(
  "/get-tasks",
  passport.authenticate("jwt", { session: false }),
  tasksApi.getTodo
);

//router handling create request
router.post(
  "/add-task",
  passport.authenticate("jwt", { session: false }),
  tasksApi.addTask
);

//router handling update request
router.post(
  "/update-task/:id",
  passport.authenticate("jwt", { session: false }),
  tasksApi.updateTask
);

//router handling delete request
router.delete(
  "/delete-task/:id",
  passport.authenticate("jwt", { session: false }),
  tasksApi.deleteTask
);

module.exports = router;
