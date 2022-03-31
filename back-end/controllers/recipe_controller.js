const mongoose = require("mongoose");
const recipe_schema = require("../models/recipes");


exports.recipe_controller =  function (req, res) {
    try {
      const Recipes = mongoose.model("recipe", recipe_schema);
      res.setHeader("Content-Type", "application/json");
      Recipes.findById(req.query.id, function (err, docs) {
        res.status(200).send({ body: docs });
      });
    } catch (e) {
      console.log(e);
    }
}