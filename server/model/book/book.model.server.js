let mongoose = require('mongoose');
let bookSchema = require('./book.schema.server');
let BookModel = mongoose.model('BookModel', bookSchema);
let articleModel = require('../article/article.model.server');
let userModel = require('../user/user.model.server');
BookModel.createBook = createBook;
BookModel.findAllBooks = findAllBooks;
BookModel.findAllBooksForUser = findAllBooksForUser;
BookModel.findBookById = findBookById;
BookModel.updateBook = updateBook;
BookModel.deleteBook = deleteBook;
BookModel.addArticle = addArticle;
BookModel.removeArticle = removeArticle;
BookModel.deleteBooksOfUser = deleteBooksOfUser;
module.exports = BookModel;


function addArticle(bookId, articleId) {
  return BookModel.findById(bookId).then(function (book) {
    book.articles.push(articleId);
    return book.save();
  });
}

function removeArticle(bookId, articleId) {
  return BookModel.findById(bookId).then(function (book) {
    let index = book.articles.findIndex(function (aid) {
      return aid === articleId;
    });
    book.articles.splice(index, 1);
    return book.save();
  });
}

function createBook(book) {
  return BookModel.create(book);
}

function findAllBooks() {
  return BookModel.find();
}

function findAllBooksForUser(userId) {
  return BookModel.find({_author: userId});
}

function findBookById(bookId) {
  return BookModel.findById(bookId);
}

function updateBook(bookId, book) {
  return BookModel.findOneAndUpdate({_id: bookId}, book, {new:true});
}

function deleteBook(bookId) {
  return BookModel.findById(bookId).then(function (book) {
    return userModel.removeBook(book._author, book._id).then(function (r) {
      return articleModel.deleteArticleOfBook(bookId).then(function (re) {
        return BookModel.findOneAndRemove({_id: bookId});
      });
    })
  });
}

function deleteBooksOfUser(userId) {
  return BookModel.remove({_author: userId});
}
