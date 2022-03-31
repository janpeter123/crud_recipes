const mongoose = require("mongoose");
const recipe_schema = require("../models/recipes");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

exports.catalog_controller = async function  (req, res) {
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
  }