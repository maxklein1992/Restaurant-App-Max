const { AUTH_LOGIN, REGISTER_USER } = require("./constants/path");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const mongoUrl =
  "mongodb+srv://admin:Wachtwoord@cluster0.mmvdxwc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./modal/user");

const User = mongoose.model("User");

app.post(`${AUTH_LOGIN}`, async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "req.body");

  const user = await User.findOne({ email, password });

  if (user) return res.json({ status: "ok", data: user });
});

app.post(`${REGISTER_USER}`, async (req, res) => {
  const { email, password, isAdmin } = req.body;

  const newUser = await User.create({ email, password, isAdmin });

  if (newUser) return res.json({ status: "ok", data: newUser });
});

app.listen(5000, () => {
  console.log("Server Started");
});
