const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const app = express();
const apiPort = 3000;
const db = require("./db");
const posts = require("./routes/post.routes");
const users = require("./routes/user.routes");

require("./auth/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/", users);
app.use("/api", passport.authenticate("jwt", { session: false }), posts);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
