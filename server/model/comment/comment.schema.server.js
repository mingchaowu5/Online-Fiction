let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CommentSchema = new Schema({
  text: String,
  _user: { type: Schema.Types.ObjectId, ref: 'UserModel' },
  _book: { type: Schema.Types.ObjectId, ref: 'BookModel' },
  dateCreated: { type: Date, default: Date.now }
}, { collection: 'comment' });

module.exports = CommentSchema;
