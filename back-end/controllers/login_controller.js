const passport = require("passport");

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
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).send("Successfully Authenticated");
      });
    }
  })(req, res, next);
};
