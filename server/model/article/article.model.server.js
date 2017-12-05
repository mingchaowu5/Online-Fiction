
module.exports = function () {
    var api = {
        createArticle: createArticle,
        findArticlesForBook: findArticlesForBook,
        findArticleById: findArticleById,
        updateArticle: updateArticle,
        deleteArticle: deleteArticle,
    };

    var mongoose = require('mongoose');
    mongoose.Promise = require('q').Promise;

    var ArticleSchema = require('./article.schema.server')();
    var ArticleModel = mongoose.model('AWArticleModel', ArticleSchema);

    return api;

    function createArticle(bookId, article) {
        article._book = bookId;
        return ArticleModel.create(article);
    }

    function findArticlesForBook(bookId) {
        return ArticleModel.find({_book: bookId});
    }

    function findArticleById(articleId) {
        return ArticleModel.findById(articleId);
    }

    function updateArticle(articleId, article) {
        return ArticleModel.update({_id: articleId},
            {
                title: article.title,
                chapterNumber: article.chapterNumber,
                chapterName: article.chapterName,
                content: article.content
            });
    }

    function deleteArticle(articleId) {
        return ArticleModel.remove({_id: articleId});
    }
};