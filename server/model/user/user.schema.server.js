var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites:  [{ type: Schema.Types.ObjectId, ref: 'WebsiteModel' }],
  dateCreated: { type: Date, default: Date.now }
}, { collection: 'user' });

module.exports = UserSchema;
