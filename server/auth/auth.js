const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("../models/user");

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "TOP_SECRET",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error, null, { status: "failed", error });
      }
    }
  )
);

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });

        return done(null, user);
      } catch (error) {
        done(error, false, { status: "failed", error });
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, {
            status: "failed",
            error: "User not found",
          });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, {
            status: "failed",
            error: "Wrong Password",
          });
        }

        return done(null, user, {
          status: "ok",
          message: "Logged in Successfully",
        });
      } catch (error) {
        return done(error, false, {
          status: "failed",
          error: { message: error },
        });
      }
    }
  )
);
