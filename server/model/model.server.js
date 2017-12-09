let connectionString = 'mongodb://localhost/cs5200project'; // for local
if(process.env.MLAB_USERNAME) { // check if running remotely
  let username = process.env.MLAB_USERNAME; // get from environment
  let password = process.env.MLAB_PASSWORD;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133816.mlab.com:33816/heroku_728nc7kf'; // use yours
}
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let db = mongoose.connect(connectionString, {
  useMongoClient: true
});
module.exports = db;
