module.exports = function (app) {
  let commentModel = require('../model/comment/comment.model.server');

  app.post('/api/create/comment', createComment);
  app.get('/api/book/:bookId/comment', findAllCommentsForBook);
  app.get('/api/user/:userId/comment', findAllCommentsForUser);
  app.get('/api/comment', findAllComments);
  app.get('/api/comment/:commentId', findCommentById);
  app.put('/api/comment/:commentId', updateComment);
  app.delete('/api/comment/:commentId', deleteComment);

  function createComment(req, res) {
    let comment = req.body;
    commentModel.createComment(comment).then(function (result) {
      res.json(result);
    })
  }

  function findAllComments(req, res) {
    commentModel.findAllComments().then(function (result) {
      res.json(result);
    })
  }

  function findAllCommentsForBook(req, res) {
    let bid = req.params['bookId'];
    commentModel.findAllCommentsForBook(bid).then(function (result) {
      res.json(result);
    })
  }

  function findAllCommentsForUser(req, res) {
    let uid = req.params['userId'];
    commentModel.findAllCommentsForUser(uid).then(function (result) {
      res.json(result);
    })
  }

  function findCommentById(req, res) {
    let cid = req.params['commentId'];
    commentModel.findCommentById(cid).then(function (result) {
      res.json(result);
    })
  }

  function updateComment(req, res) {
    let cid = req.params['commentId'];
    let comment = req.body;
    commentModel.updateComment(cid, comment).then(function (result) {
      res.json(result);
    })
  }


  function deleteComment(req, res) {
    let cid = req.params['commentId'];
    commentModel.deleteComment(cid).then(function (result) {
      res.json({});
    })
  }

};
