"use strict";
module.exports = function (app) {
  let users = require("../controllers/user.controller");
  let posts = require("../controllers/post.controller");

  // Users
  app.route("/api/signup").post(users.signUp);

  app.route("/api/signin").post(users.signIn);

  app.route("/api/signout").post(users.signOut);

  // Posts
  app.route("/api/posts").get(posts.getPosts).post(posts.addPost);

  app.route("/api/posts/:cuid").delete(posts.deletePost);

  app.route("/api/post").get(posts.getPost);
};
