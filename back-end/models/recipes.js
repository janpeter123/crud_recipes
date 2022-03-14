const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipe = new Schema({
    author: String,
    recipe_name: String,
    date: String,
    country: String,
    prepare_time: Number,
    prepare_time_unit: String,
    video_link: String,
    main_photo: String,
    photo_album: Array,
    ingredients_list: Array,
    description: Array,
    reviews: Array,
    review_count:Number
  });

module.exports = recipe;