const User = require("../models/user");
/**
 * Sign up a User
 * @param req
 * @param res
 * @returns void
 */
signUp = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password,
  });

  if (!user) {
    res.status(400).json({ error: "Sorry for that" });
  }

  res.status(200).json({ user });
};

/**
 * Sign in User
 * @param req
 * @param res
 * @returns void
 */
signIn = async (req, res) => {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
};

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
signOut = async (req, res) => {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
};
