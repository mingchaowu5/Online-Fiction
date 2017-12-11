module.exports = function (app) {

  let articleModel = require('../model/article/article.model.server');
  let bookModel = require('../model/book/book.model.server');
  app.post('/api/book/:bookId/article', createArticle);
  app.get('/api/book/:bookId/article', findAllArticlesForBook);
  app.get('/api/article/:articleId', findArticleById);
  app.get('/api/article', findAllArticles);
  app.put('/api/article/:articleId', updateArticle);
  app.delete('/api/article/:articleId', deleteArticle);

  function createArticle(req, res) {
    let article = req.body;
    let bookId = req.params['bookId'];
    articleModel.createArticle(article).then(function (result) {
      if (bookId != 0) {
        bookModel.addArticle(bookId, result._id).then(function (r) {
          res.json(result);
        })
      } else {
        res.json(result);
      }
    })
  }

  function findAllArticlesForBook(req, res) {
    let bookId = req.params['bookId'];
    articleModel.findAllArticlesForBook(bookId).then(function (result) {
      res.json(result);
    })
  }

  function findArticleById(req, res) {
    let pid = req.params['articleId'];
    articleModel.findArticleById(pid).then(function (result) {
      res.json(result);
    })
  }

  function findAllArticles(req, res) {
    articleModel.findAllArticles().then(function (result) {
      res.json(result);
    })
  }

  function updateArticle(req, res) {
    let pid = req.params['articleId'];
    let article = req.body;
    articleModel.updateArticle(pid, article).then(function (result) {
      res.json(result);
    })
  }

  function deleteArticle(req, res) {
    let pid = req.params['articleId'];
    articleModel.findArticleById(pid).then(function (article) {
      if (article._book) {
        bookModel.removeArticle(article._book, article._id).then(function (book) {
          articleModel.deleteArticle(pid).then(function (result) {
            res.json({});
          });
        });
      } else {
        articleModel.deleteArticle(pid).then(function (result) {
          res.json({});
        });
      }
    });
  }


};
