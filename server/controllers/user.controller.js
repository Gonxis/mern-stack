const passport = require("passport");
const jwt = require("jsonwebtoken");

/**
 * Sign up a User
 * @param req
 * @param res
 * @returns User
 */
signUp = async () => {
  passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
      res.json({
        message: "Signup successful",
        user: req.user,
      });
    };
};

/**
 * Sign in User
 * @param req
 * @param res
 * @returns User
 */
signIn = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        return res.json({ token, user: body });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

/**
 * Sign out
 * @param req
 * @param res
 * @returns void
 */
signOut = async (req, res) => {};

module.exports = {
  signUp,
  signIn,
  signOut,
};
