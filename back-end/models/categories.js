const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema({
  _id: mongoose.Types.ObjectId,
  main_photo: String,
  name: String,
});

module.exports = category;
