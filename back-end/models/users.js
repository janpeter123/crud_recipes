const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  _id: String,
  name: String,
  user: String,
  password: String,
  country: String
});

module.exports = user;
