import mongoose from "mongoose";

/**
 * @description user schema
 */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const Users = mongoose.model("UserTable", userSchema);

export default Users;
