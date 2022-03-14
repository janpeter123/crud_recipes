const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const credentials = dotenv.parsed;

const uri = `mongodb+srv://${credentials.MONGO_DB_ROLE}:${credentials.MONGO_DB_PASSWORD}@cluster0.83pjp.mongodb.net/crud?retryWrites=true&w=majority`;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const recipe_schema = new Schema({
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
  review:Number
});

async function get_recipes() {
  try {
    // Connecting to the MongoDB cluster
    mongoose.connect(uri, (err, docs) => {
      console.log("Conectado ao DB . . .");

      //Using a specific collection
      const myModel = mongoose.model("recipe", recipe_schema);
      myModel.find({}, {_id:ObjectId,recipe_name: 1 }, function (err, docs) {
        mongoose.disconnect();
        console.log(docs);
        return docs;
      });

      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

get_recipes()

