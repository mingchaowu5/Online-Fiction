module.exports = function (app) {
  let bookModel = require('../model/book/book.model.server');
  let userModel = require('../model/user/user.model.server');

  app.post('/api/user/:userId/book', createBook);
  app.get('/api/user/:userId/book', findAllBooksForUser);
  app.get('/api/book/:bookId', findBookById);
  app.get('/api/book', findAllBooks);
  app.put('/api/book/:bookId', updateBook);
  app.delete('/api/book/:bookId', deleteBook);

  function createBook(req, res) {
    let book = req.body;
    let userId = req.params['userId'];
    bookModel.createBook(book).then(function (result) {
      userModel.addBook(userId, result._id).then(function (r) {
        res.json(result);
      })
    })
  }

  function findAllBooks(req, res) {
    bookModel.findAllBooks().then(function (result) {
      res.json(result);
    })
  }

  function findAllBooksForUser(req, res) {
    let userId = req.params['userId'];
    bookModel.findAllBooksForUser(userId).then(function (result) {
      res.json(result);
    })
  }

  function findBookById(req, res) {
    let aid = req.params['bookId'];
    bookModel.findBookById(aid).then(function (result) {
      res.json(result);
    })
  }

  function updateBook(req, res) {
    let aid = req.params['bookId'];
    let book = req.body;
    bookModel.updateBook(aid, book).then(function (result) {
      res.json(result);
    })
  }

  function deleteBook(req, res) {
    let bid = req.params['bookId'];
    bookModel.deleteBook(bid).then(function (result) {
      res.json({});
    })
  }

};
