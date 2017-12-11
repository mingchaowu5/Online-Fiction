let mongoose = require('mongoose');
let commentSchema = require('./comment.schema.server');
let CommentModel = mongoose.model('CommentModel', commentSchema);
CommentModel.createComment = createComment;
CommentModel.findAllCommentsForBook = findAllCommentsForBook;
CommentModel.findAllCommentsForUser = findAllCommentsForUser;
CommentModel.findCommentById = findCommentById;
CommentModel.updateComment = updateComment;
CommentModel.deleteComment = deleteComment;
CommentModel.deleteCommentsOfUser = deleteCommentsOfUser;
CommentModel.deleteCommentsOfBook = deleteCommentsOfBook;
module.exports = CommentModel;

function createComment(comment) {
  return CommentModel.create(comment);
}

function findAllCommentsForBook(bookId) {
  return CommentModel.find({_book: bookId}).populate('_user').sort({dateCreated: 'desc'}).exec();
}

function findAllCommentsForUser(userId) {
  return CommentModel.find({_user: userId}).populate('_book').sort({dateCreated: 'desc'}).exec();
}

function findCommentById(commentId) {
  return CommentModel.findById(commentId).populate('_user').exec();
}

function updateComment(commentId, comment) {
  return CommentModel.findOneAndUpdate({_id: commentId}, comment, {new:true});
}

function deleteComment(commentId) {
  return CommentModel.findOneAndRemove({_id: commentId});
}

function deleteCommentsOfUser(userId) {
  return CommentModel.remove({_user: userId});
}

function deleteCommentsOfBook(bookId) {
  return CommentModel.remove({_book: bookId});
}
