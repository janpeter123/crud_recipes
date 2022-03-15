//# Express Dependencies
var express = require("express");

//# Mongoose
const mongoose = require("mongoose");
const recipe_schema = require("./models/recipes");

// #DB Credentials .env file
const dotenv = require("dotenv").config();
const credentials = dotenv.parsed;

// # Configuring credentials and mongodb schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const uri = `mongodb+srv://${credentials.MONGO_DB_ROLE}:${credentials.MONGO_DB_PASSWORD}@cluster0.83pjp.mongodb.net/crud?retryWrites=true&w=majority`;

//Connecting to the DB

try {
  mongoose.connect(uri, (err, docs) => {
    if (err) {
    } else {
      var app = express();

      //getting recipes
      const Recipes = mongoose.model("recipe", recipe_schema);

      app.get("/get_recipes", async function (req, res) {
        res.setHeader("Content-Type", "application/json");
        Recipes.find(
          {},
          { _id: ObjectId, recipe_name: 1, reviews: 1, author:1, prepare_time:1, prepare_time_unit:1, main_photo:1 },
          function (err, docs) {
            res.status(200).send({"body":docs});
          }
        );
      });

      
      console.log("Listening on port 5001");
      app.listen(5001);
    }
  });
} catch (e) {
  console.log(e);
}
