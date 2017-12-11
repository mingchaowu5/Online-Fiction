let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  _author: {type: Schema.Types.ObjectId, ref: "UserModel"},
  isbn: String,
  articles: [{type: Schema.Types.ObjectId, ref: "ArticleModel"}],
  genre: String,
  dateCreated: { type: Date, default: Date.now }
}, {collection: "book"});

module.exports = BookSchema;
