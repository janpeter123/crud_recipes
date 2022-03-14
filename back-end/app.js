//# Express Dependencies
var express = require("express");

//# Mongoose
const mongoose = require("mongoose");

// #DB Credentials
const dotenv = require("dotenv").config();
const credentials = dotenv.parsed;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const recipe_schema = require("./models/recipes");
const uri = `mongodb+srv://${credentials.MONGO_DB_ROLE}:${credentials.MONGO_DB_PASSWORD}@cluster0.83pjp.mongodb.net/crud?retryWrites=true&w=majority`;

mongoose.connect(uri, (err, docs) => {
  //Using a specific collection

  if (err) {
  } else {
    var app = express();

    const Recipes = mongoose.model("recipe", recipe_schema);

    app.get("/get_recipes", async function (req, res) {
      // res.setHeader("Content-Type", "application/json");
      Recipes.find({}, { _id: ObjectId, recipe_name: 1, review:1 }, function (err, docs) {
        res.send(docs);
      });
    });
    console.log("Listening on port 5001");
    app.listen(5001);
  }
});
