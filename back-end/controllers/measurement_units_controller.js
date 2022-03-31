const mongoose = require("mongoose");
const category_schema = require("../models/categories");

/**
 * @api {get} /get_measurement_units
 * @description Gets all available measurement units to give to the user on the add recipe page
 * @access Public
 * @param {object} req 
 * @param {object} res 
 */
exports.measurement_controller = async (req, res) => {
    try {
      const measurement_units = mongoose.model(
        "measurement_units",
        category_schema
      );
      res.setHeader("Content-Type", "application/json");
      measurement_units.find({}, function (err, docs) {
        res.status(200).send({ body: docs });
      });
    } catch (e) {
      console.log(e);
    }
  }