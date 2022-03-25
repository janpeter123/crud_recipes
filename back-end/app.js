//# Express Dependencies
var express = require("express");

//# Mongoose
const mongoose = require("mongoose");
const recipe_schema = require("./models/recipes");
const category_schema = require("./models/categories");

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

      app.get("/get_catalog", async function (req, res) {
        //getting recipes
        try {
          const Recipes = mongoose.model("recipe", recipe_schema);
          res.setHeader("Content-Type", "application/json");
          Recipes.find(
            {},
            {
              _id: ObjectId,
              recipe_name: 1,
              reviews: 1,
              author: 1,
              prepare_time: 1,
              prepare_time_unit: 1,
              main_photo: 1,
            },
            function (err, docs) {
              res.status(200).send({ body: docs });
            }
          );
        } catch (e) {
          console.log(e);
        }
      });

      app.get("/get_recipe", async function (req, res) {
        try {
          const Recipes = mongoose.model("recipe", recipe_schema);
          res.setHeader("Content-Type", "application/json");
          Recipes.findById(req.query.id, function (err, docs) {
            res.status(200).send({ body: docs });
          });
        } catch (e) {
          console.log(e);
        }
      });

      app.get("/get_categories", async (req, res) => {
        try {
          const Categories = mongoose.model("categories", category_schema);
          res.setHeader("Content-Type", "application/json");
          Categories.find(
            {},
            { _id: ObjectId, main_photo: 1, name: 1 },
            function (err, docs) {
              res.status(200).send({ body: docs });
            }
          );
        } catch (e) {
          console.log(e);
        }
      });



      app.get("/get_measurement_units", async (req, res) => {
        try {
          const measurement_units = mongoose.model("measurement_units", category_schema);
          res.setHeader("Content-Type", "application/json");
          measurement_units.find(
            {},
            function (err, docs) {
              res.status(200).send({ body: docs });
            }
          );
        } catch (e) {
          console.log(e);
        }
      });


      app.get("/get_countries", async (req, res) => {
        try {
          const countries = mongoose.model("countries", category_schema);
          res.setHeader("Content-Type", "application/json");
          countries.find(
            {},
            function (err, docs) {
              res.status(200).send({ body: docs });
            }
          );
        } catch (e) {
          console.log(e);
        }
      });

      console.log("Listening on port 5001");
      app.listen(5001);
    }
  });
} catch (e) {
  console.log(e);
}
