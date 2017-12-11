let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = mongoose.Schema({
  _book: {type: Schema.Types.ObjectId, ref: "BookModel"},
  title: String,
  chapterNumber: Number,
  chapterName: String,
  content: String,
  dateCreated: { type: Date, default: Date.now }
}, {collection: "article"});

module.exports = ArticleSchema;
