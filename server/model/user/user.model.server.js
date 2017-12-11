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
UserModel.toggleLikeBook = toggleLikeBook;
UserModel.addBook = addBook;
UserModel.removeBook = removeBook;
UserModel.toggleFollow = toggleFollow;
UserModel.findFollowingUsers = findFollowingUsers;
UserModel.findFollowedUsers = findFollowedUsers;
module.exports = UserModel;
let bookModel = require('../book/book.model.server');
let commentModel = require('../comment/comment.model.server');

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

function findFollowingUsers(userId) {
  return UserModel.findById(userId).then(function (user) {
    return UserModel.find( {'_id': { $in: user.follows }});
  })
}

function findFollowedUsers(userId) {
  return UserModel.findById(userId).then(function (user) {
    return UserModel.find( {'_id': { $in: user.followedBy }});
  })
}

function findAllUsers() {
  return UserModel.find({ role: { $ne: 'admin' } });
}

function updateUser(userId, user){
  return UserModel.findOneAndUpdate({_id: userId}, user);
}

function deleteUser(userId){
  return UserModel.findById(userId).then(function (user) {
    let updates = [];
    for (let i = 0; i < user.follows.length; i++) {
      updates.push(toggleFollow(user._id, user.follows[i]));
    }
    for (let i = 0; i < user.followedBy.length; i++) {
      updates.push(toggleFollow(user.followedBy[i], user._id));
    }
    if (user.role === 'writer') {
      updates.push(bookModel.deleteBooksOfUser(user._id));
    } else if (user.role === 'editor') {
      updates.push(commentModel.deleteCommentsOfUser(user._id))
    }
    return Promise.all(updates).then(function (r) {
      return UserModel.findOneAndRemove({_id: userId});
    });
  });
}

function toggleLikeBook(userId, bookId) {
  return UserModel.findById(userId).then(function (user) {
    let index = user.bookshelf.indexOf(bookId);
    if (index === -1) {
      user.bookshelf.push(bookId);
    } else {
      user.bookshelf.splice(index, 1);
    }
    return user.save();
  });
}

function addBook(userId, bookId) {
  return UserModel.update(
    {_id: userId},
    {$push: {publishedBooks: bookId}}
  );
}

function removeBook(userId, bookId) {
  return UserModel.update(
    {_id: userId},
    {$pull: {publishedBooks: bookId}}
  );
}

function toggleFollow(uid1, uid2) {
  return UserModel.findById(uid1).then(function (user1) {
    return UserModel.findById(uid2).then(function (user2) {
      let index = user1.follows.indexOf(uid2);
      if (index === -1) { // User1 should follow user2
        user1.follows.push(uid2);
        user2.followedBy.push(uid1);
      } else { // User1 should unfollow user2
        user1.follows.splice(index, 1);
        let index2 = user2.followedBy.indexOf(uid1);
        user2.followedBy.splice(index2, 1);
      }
      let updates = [];
      updates.push(user1.save());
      updates.push(user2.save());
      return Promise.all(updates);
    });
  });
}
