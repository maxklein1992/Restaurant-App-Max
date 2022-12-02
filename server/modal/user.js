const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  isAdmin: Boolean,
});

mongoose.model("User", UserSchema);
