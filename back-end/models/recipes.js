const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipe = new Schema({
    _id: mongoose.Types.ObjectId,
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
    reviews: Number,
    review_count:Number,
    category_id:String
  });

module.exports = recipe;