const mongoose = require("mongoose");
const category_schema = require("../models/categories");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

exports.categories_controller = async (req, res) => {
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
  }