const mongoose = require("mongoose");
const recipe_schema = require("../models/recipes");

exports.update_recipe_review_controller = async (req, res) => {
    const Recipes = mongoose.model("recipe", recipe_schema);
    res.setHeader("Content-Type", "application/json");

    try {
      Recipes.findByIdAndUpdate(
        req.body.id,
        {
         reviews: req.body.new_review,
          review_count: req.body.new_review_count,
        },
        function (err, docs) {
          res.sendStatus(200);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }