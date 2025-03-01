const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: "String", required: true },
  title: { type: "String", required: true },
  content: { type: "String", required: true },
  image: { type: "String" },
  slug: { type: "String", required: true },
  cuid: { type: "String", required: true },
  dateAdded: { type: "Date", default: Date.now, required: true },
  authorId: { type: "String", require: true },
});

module.exports = mongoose.model("Post", postSchema);
