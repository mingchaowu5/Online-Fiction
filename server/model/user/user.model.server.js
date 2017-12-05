<<<<<<< Updated upstream
let mongoose = require('mongoose');
let UserSchema = require('./user.schema.server');
let UserModel = mongoose.model('UserModel', UserSchema);
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findAllUsers = findAllUsers;
module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  return UserModel.find();
}

function updateUser(userId, user){
  return UserModel.findOneAndUpdate({_id: userId}, user);
}

function deleteUser(userId){
  return UserModel.findOneAndRemove({_id: userId});
}
=======
module.exports = function () {

  var api = {
    createUser: createUser,
    findUserById: findUserById,
    findUserByUsername: findUserByUsername,
    findUserByCredentials: findUserByCreadentials,
    updateUser: updateUser,
    deleteUser: deleteUser,
    findAllUsers: findAllUsers,
    findUserByFacebookId: findUserByFacebookId,
    findUserByGoogleId: findUserByGoogleId,
    findUserByGoodreadsId: findUserByGoodreadsId,
    addToBookshelf: addToBookshelf
  };

  var mongoose = require('mongoose');
  mongoose.Promise = require('q').Promise;

  var UserSchema = require('./user.schema.server')();
  var UserModel = mongoose.model('AWUserModel', UserSchema);

  return api;

  function findUserByGoodreadsId(goodreadsId) {
    return UserModel.findOne({
      'goodreads.id': goodreadsId
    });
  }

  function findUserByGoogleId(googleId) {
    return UserModel.findOne({
      'google.id': googleId
    });
  }

  function findUserByFacebookId(facebookId) {
    return UserModel.findOne({"facebook.id": facebookId});
  }

  // Creates a new user instance
  function createUser(user) {
    return UserModel.create(user);
  }

  // Retrieves a user instance whose _id is equal to parameter userId
  function findUserById(userId) {
    return UserModel.findById(userId);
  }

  // Retrieves a user instance whose username is equal to parameter username
  function findUserByUsername(username) {
    return UserModel.findOne({username: username});
  }

  // Retrieves a user instance whose username and password are equal to parameters userId and password
  function findUserByCreadentials(username, password) {
    return UserModel.findOne({
      username: username,
      password: password
    });
  }

  function findAllUsers() {
    return UserModel.find({
      role: { $in: ['reader', 'writer']}
    });
  }

  // Updates user instance whose _id is equal to parameter userId
  function updateUser(userId, user) {
    return UserModel.update({
      _id: userId
    }, {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role
    });
  }

  function addToBookshelf(userId, bookId) {
    // console.log("adding book to user shelf");
    // console.log(userId);
    // console.log(bookId);

    return UserModel.update(
      {_id: userId},
      {$push: {bookshelf: bookId}}
    );
  }

  // Removes user instance whose _id is equal to parameter userId
  function deleteUser(userId) {
    return UserModel.remove({_id: userId});
  }
};
>>>>>>> Stashed changes
