const mongoose = require("mongoose");
const recipe_schema = require("../models/recipes");

exports.create_recipe_controller = async (req, res) => {
    try {
      let date = new Date();
      var created_at = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      if (req.body.video_link.includes("watch?v=")) {
        req.body.video_link = req.body.video_link.replace(
          "watch?v=",
          "embed/"
        );
      }

      const Recipes = mongoose.model("recipe", recipe_schema);
      res.setHeader("Content-Type", "application/json");
      const recipe = new Recipes({
        _id: new mongoose.Types.ObjectId(),
        author: req.body.author,
        recipe_name: req.body.recipe_name,
        prepare_time: req.body.prepare_time,
        prepare_time_unit: req.body.prepare_time_unit,
        main_photo: req.body.main_photo,
        video_link: req.body.video_link,
        ingredients_list: req.body.ingredients_list,
        description: req.body.description,
        country: req.body.country,
        category_id: req.body.category_id,
        review_count: 0,
        reviews: 0,
        date: created_at,
      });

      recipe.save(function (err) {
        if (err) {
          console.log(err);
        }
      });

      res.status(201).send(req.body);
    } catch (e) {
      console.log(e);
    }
  }