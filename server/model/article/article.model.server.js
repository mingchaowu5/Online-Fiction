let mongoose = require('mongoose');
let articleSchema = require('./article.schema.server');
let ArticleModel = mongoose.model('ArticleModel', articleSchema);
ArticleModel.createArticle = createArticle;
ArticleModel.findAllArticles = findAllArticles;
ArticleModel.findAllArticlesForBook = findAllArticlesForBook;
ArticleModel.findArticleById = findArticleById;
ArticleModel.updateArticle = updateArticle;
ArticleModel.deleteArticle = deleteArticle;
ArticleModel.deleteArticleOfBook = deleteArticleOfBook;
module.exports = ArticleModel;
let articleModel = require('../article/article.model.server');

function createArticle(article) {
  return ArticleModel.create(article);
}

function findAllArticles() {
  return ArticleModel.find();
}

function findAllArticlesForBook(bookId) {
  return ArticleModel.find({_book: bookId});
}

function findArticleById(articleId) {
  return ArticleModel.findById(articleId);
}

function updateArticle(articleId, article) {
  return ArticleModel.findOneAndUpdate({_id: articleId}, article, {new:true});
}

function deleteArticle(articleId) {
  return ArticleModel.findOneAndRemove({_id: articleId});
}

function deleteArticleOfBook(bookId) {
  return ArticleModel.remove({_book: bookId});
}
