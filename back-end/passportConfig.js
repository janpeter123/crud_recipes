const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const users_schema = require("./models/users");
const users = mongoose.model("users", users_schema);
const { createHash } = require("crypto");

module.exports = function (passport) {
  passport.use(new LocalStrategy((username, password, done)=>{
      users.findOne({ username: username }, function (err, user) {
        password = createHash("sha256").update(password).digest("hex");
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    users.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.user,
      };
      cb(err, userInformation);
    });
  });
};
