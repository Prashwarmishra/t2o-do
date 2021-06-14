const Task = require("../../../models/task");
const User = require("../../../models/user");

//controller to add a task
module.exports.addTask = async function (req, res) {
  try {
    //find a user in database
    let user = await User.findById(req.user.id);

    //if user found
    if (user) {
      //create a task
      let task = await Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate,
        user: req.user._id,
      });

      //push the id of the newly created task to user schema
      user.tasks.push(task);
      user.save();

      //return task
      return res.status(200).json({
        success: true,
        message: "Task created Successfully",
        data: {
          task: task,
        },
      });
    }
    //handle user not found
    else {
      return res.status(422).json({
        success: false,
        message: "Unauthorized",
      });
    }

    //handle any errors if any
  } catch (error) {
    console.log("Error in adding todo:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//controller to get all the tasks created by a user
module.exports.getTodo = async function (req, res) {
  try {
    //fetch all the tasks from the array of tasks in user schema
    let tasks = await User.findById(req.user.id).populate("tasks");
    console.log("tasks", tasks);
    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully!",
      data: {
        tasks: tasks,
      },
    });

    //handle errors if any
  } catch (error) {
    console.log("Error in fetching todo:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//controller to update tasks
module.exports.updateTask = async function (req, res) {
  try {
    //find the task in database from the params provided
    let task = await Task.findById(req.params.id);

    //check if the user is authorized to update the task
    if (task.user == req.user.id) {
      //update task
      if (task) {
        task.description = req.body.new_description;
        task.dueDate = req.body.new_dueDate;
        task.category = req.body.new_category;
        task.save();
      }
      return res.status(200).json({
        success: true,
        message: "Task updated successfully",
      });
    }
    //handle Unauthorized requests
    else {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    //handle errors if any
  } catch (error) {
    console.log("Error in deleting task:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//controller to delete a task
module.exports.deleteTask = async function (req, res) {
  try {
    //find the task from the params
    let task = await Task.findById(req.params.id);
    console.log(req.params.id);

    //check if the user is authorized to delete the task
    if (req.user.id == task.user) {
      //remove the task
      task.remove();

      //remove the id of task deleted from the tasks array in user schema
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { tasks: req.params.id },
      });

      return res.status(200).json({
        success: true,
        message: "Task deleted Successfully",
      });
    }
    //handle Unauthorized requests
    else {
      return res.status(422).json({
        success: false,
        message: "Unauthorized",
      });
    }

    //handle errors if any
  } catch (error) {
    console.log("Error in deleting task:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
