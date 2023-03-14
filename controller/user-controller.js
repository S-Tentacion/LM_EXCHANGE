import Users from "../model/user.js";
import jwt from "jsonwebtoken";

/**
 * @description initialization request
 */

export const initialization = async (req, res) => {
  try {
    res.status(200).json("Hello There!");
    console.log("Connected");
  } catch (err) {
    res.status(500).json("Something went wrong!");
    console.log("Error", err);
  }
};

/**
 * @description signup request
 */

export const userSignUp = async (req, res) => {
  try {
    const exits = await Users.findOne({ username: req.body.username });
    if (exits) {
       res.status(500).json({ message: "UserName already register" });
    }
    const user = req.body;
    const newUser = new Users({
      username: user.username,
      password: user.password,
    });
    await newUser.save();
    const token = await jwt.sign({ user: newUser }, "secretkey", {
      expiresIn: "10d",
    });
    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/**
 * @description login request
 */

export const userLogin = async (req, res) => {
  try {
    const user = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = await jwt.sign({ user: user }, "secretkey", {
        expiresIn: "10d",
      });
      res.status(200).json({ token: token });
    } else {
      res.status(401).json({
        message: "Something went wrong please check username or password",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/**
 * @description get user details via using bearer token
 */

export const getUserDetails = async (req, res) => {
  try {
    let token;
    const { authorization } = req.headers;
    // check user authorization
    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
      const { user } = await jwt.verify(token, "secretkey");
      // check user is valid or not
      const exits = await Users.findOne({ _id: user._id });
      if (!exits) res.status(401).json({ message: "User is not registered" });
      delete user.password;
      delete user.__v;
      if (user) {
        res.status(200).json({
          data: exits,
        });
      } else {
        res
          .status(401)
          .json({ message: "Something went wrong not able to find any user" });
      }
    } else {
      // if token is not present
      res.status(401).json({ message: "Token is required" });
    }
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

/**
 * @description update user details via using bearer token
 */

export const updateUserDetails = async (req, res) => {
  try {
    let token;
    const { authorization } = req.headers;
    const payload = req.body;
    // check user token
    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
      const { user } = await jwt.verify(token, "secretkey");
      // update user
      const updated = await Users.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
            ...payload,
          },
        },
        {
          new: true,
        }
      );
      res.status(200).json({ message: updated });
    } else {
      // if token is not present
      res.status(401).json({ message: "Token is required" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
