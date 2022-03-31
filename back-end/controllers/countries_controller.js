const mongoose = require("mongoose");
const category_schema = require("../models/categories");

/**
 * @api {get} /get_countries
 * @acces Public
 * @description Gets all available countries to help the user on the recipe page.
 * @param {object} req 
 * @param {object} res 
 */

exports.countries_controller = async (req, res) => {
    try {
      const countries = mongoose.model("countries", category_schema);
      res.setHeader("Content-Type", "application/json");
      countries.find({}, function (err, docs) {
        res.status(200).send({ body: docs });
      });
    } catch (e) {
      console.log(e);
    }
  }