const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  _id: String,
  name: String,
  username: String,
  password: String,
  country: String
});

module.exports = user;
