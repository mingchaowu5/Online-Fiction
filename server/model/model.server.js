let connectionString = 'mongodb://localhost/cs5200project'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  let username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  let password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds123956.mlab.com:23956/heroku_nth133xb'; // use yours
}
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let db = mongoose.connect(connectionString, {
  useMongoClient: true
});
module.exports = db;
