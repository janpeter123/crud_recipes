const passport = require("passport");
const { createHash } = require("crypto");

/**
 * @api {post} /login
 * @access Private
 * @description Logs the user in the system
 * @param {object} req
 * @param {object} res
 */
exports.login_controller = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    //If passport has the object user it means that an user is already logged In
    if(req.user){
      res.status(200).send("User Already logged In");
    }
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        console.log(req.user);
        res.status(200).send("Logged In");
      });
    }
  })(req, res, next);
};
