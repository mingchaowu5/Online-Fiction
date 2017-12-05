
module.exports = function () {
  var api = {
    createBook: createBookForAuthor,
    findBookById: findBookById,
    findAllBooksForAuthor: findAllBooksForAuthor,
    findAllBooks: findAllBooks,
    updateBook: updateBook,
    deleteBook: deleteBook
  };

  var mongoose = require('mongoose');
  mongoose.Promise = require('q').Promise;

  var BookSchema = require('./book.schema.server')();
  var BookModel = mongoose.model('AWBookModel', BookSchema);

  return api;

  function findPopularBooks() {
    // TODO:
  }

  function findAllBooks() {
    return BookModel.find();
  }

  function createBookForAuthor(userId, newBook) {
    if (newBook.authors) {
      newBook.authors.push(userId);
    } else {
      newBook.authors = [userId];
    }
    return BookModel.create(newBook);
  }

  function updateBook(bookId, newBook) {
    console.log(newBook);
    console.log(JSON.stringify(newBook));
    return BookModel.update({
      _id: bookId
    }, {
      title: newBook.title,
      authors: newBook.authors,
      isbn: newBook.isbn,
      articles: newBook.articles,
      subscribers: newBook.subscribers,
      genres: newBook.genres,
      // liked: newBook.liked,
      description: newBook.description
    });
  }

  function findBookById(bookId) {
    return BookModel.findById(bookId);
  }

  function deleteBook(bookId) {
    return BookModel.remove({_id: bookId});
  }

  function findAllBooksForAuthor(authorId) {
    return BookModel.find({authors: authorId});
  }

  // TODO: add/remove article, etc.
};
