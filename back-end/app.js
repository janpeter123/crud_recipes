//# Express Dependencies
var express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const { catalog_controller } = require("./controllers/catalog_controller");
const { recipe_controller } = require("./controllers/recipe_controller");
const {
  categories_controller,
} = require("./controllers/categories_controller");
const {
  measurement_controller,
} = require("./controllers/measurement_units_controller");
const { countries_controller } = require("./controllers/countries_controller");
const {
  create_recipe_controller,
} = require("./controllers/create_recipe_controller");
const {
  update_recipe_review_controller,
} = require("./controllers/update_recipe_review_controller");
const { login_controller } = require("./controllers/login_controller");
//# Mongoose
const mongoose = require("mongoose");


// #DB Credentials .env file
const dotenv = require("dotenv").config();
const credentials = dotenv.parsed;

// # Configuring credentials and mongodb schema
const Schema = mongoose.Schema;
const uri = `mongodb+srv://${credentials.MONGO_DB_ROLE}:${credentials.MONGO_DB_PASSWORD}@cluster0.83pjp.mongodb.net/crud?retryWrites=true&w=majority`;

//Connecting to the DB
try {
  mongoose.connect(uri, (err, docs) => {
    if (err) {
    } else {
      var app = express();
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use(
        session({
          secret: "secretcode",
          resave: true,
          saveUninitialized: true,
        })
      );

      app.use(passport.initialize());
      app.use(passport.session());
      require("./passportConfig")(passport);

      app.get("/get_catalog", catalog_controller);
      app.get("/get_recipe", recipe_controller);
      app.get("/get_categories", categories_controller);
      app.get("/get_measurement_units", measurement_controller);
      app.get("/get_countries", countries_controller);
      
      app.patch("/update_recipe", update_recipe_review_controller);

      app.post("/create_recipe", create_recipe_controller);
      app.post("/login", login_controller);


      console.log("Listening on port 5001");
      app.listen(5001);
    }
  });
} catch (e) {
  console.log(e);
}
