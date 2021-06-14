const User = require("../../../models/user");
const jwt = require("jsonwebtoken");

//controller to create user account
module.exports.create = async function (req, res) {
  try {
    //check if the password matches confirm password
    if (req.body.password != req.body.confirm_password) {
      console.log("Password and Confirm Password does not match");
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password does not match",
      });
    }

    //check if the user is already present in the database
    let user = await User.findOne({ email: req.body.email });

    //if user is present, notify that the email already exists in the database
    if (user) {
      console.log("User already exists in the database");
      return res.status(409).json({
        success: false,
        message: "User account by the email provided already exists",
      });
    }
    //else create user
    else {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      return res.status(200).json({
        success: true,
        message: "User account created, please sign-in to continue",
      });
    }

    //handle errors if any
  } catch (error) {
    console.log("Error in creating user: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//controller for user sign-in
module.exports.createSession = async function (req, res) {
  try {
    //locate the user in the database from the email provided
    let user = await User.findOne({ email: req.body.email });

    //handle user not found and incorrect password cases
    if (!user || user.password != req.body.password) {
      return res.status(422).json({
        success: false,
        message: "Invalid Username/Password",
      });
    }

    //if the user is found and password matches, create a jwt token and send it back
    if (user) {
      return res.status(200).json({
        success: true,
        message: "Logged in successfully, here is your token:",
        data: {
          user,
          token: jwt.sign(user.toJSON(), "todoapp", { expiresIn: "86400000" }),
        },
      });
    }

    //handle errors if any
  } catch (error) {
    console.log("Error in creating user session:", error);
    return (
      res.status(500),
      json({
        success: false,
        message: "Internal Server Error",
      })
    );
  }
};
