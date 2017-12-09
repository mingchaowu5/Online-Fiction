let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {type: String, required: true},
  password: String,
  role: {type: String, enum: ["admin", "reader", "writer", "editor"], default: "reader"},
  firstName: {type: String, default: 'first'},
  lastName: {type: String, default: 'last'},
  phone: String,
  email: String,
  address: String,
  bookshelf: [{type: mongoose.Schema.Types.ObjectId, ref: 'BookModel'}],
  publishedBooks: [{type: mongoose.Schema.Types.ObjectId, ref: 'BookModel'}],
  comments: [{ type: Schema.Types.ObjectId, ref: 'CommentModel' }],
  follows: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
  followedBy: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }],
  dateCreated: {type: Date, default: Date.now},
}, { collection: 'user' });

module.exports = UserSchema;
