let mongoose = require('mongoose');
let UserSchema = require('./user.schema.server');
let UserModel = mongoose.model('UserModel', UserSchema);
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByFacebookId = findUserByFacebookId;
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

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
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
