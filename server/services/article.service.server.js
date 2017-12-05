
module.exports = function (app, model) {
    app.post("/aw/api/book/:bookId/article", createArticle);
    app.get("/aw/api/article/:articleId", findArticleById);
    app.get("/aw/api/book/:bookId/article", findAllArticlesForBook);
    app.get("/aw/api/article/popular/:amount", findPopularArticles);
    app.put("/aw/api/article/:articleId", updateArticle);
    app.delete("/aw/api/article/:articleId", deleteArticle);
    app.get("/aw/api/article", findArticles);

    function findAllArticlesForBook(req, res) {
        var bookId = req.params.bookId;

        model.ArticleModel
            .findArticlesForBook(bookId)
            .then(
                function (articles) {
                    res.json(articles);
                },
                function (err) {
                    res.status(500).send(err);
                }
            )
    }
    
    function findArticles(req, res) {
        var authorId = req.query.authorId;

        if (authorId) {
            findArticlesByAuthorId(req, res);
        }
    }

    function findPopularArticles(req, res) {
        var amount = req.params.amount;
    }

    /*
    function findAllArticles(req, res) {
        model.ArticleModel.findAllArticles()
            .then(
                function (articles) {
                    res.json(articles);
                }
            );
    }
    */

    function findArticlesByAuthorId(req, res) {
        var authorId = req.query.authorId;
        console.log("find articles by author ID");

        model.ArticleModel
            .findArticlesByAuthorId(authorId)
            .then(
                function (response) {
                    res.send(response);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function createArticle(req, res) {
        var userId = req.params.userId;
        var bookId = req.params.bookId;
        var newArticle = req.body;

        console.log("creating article");
        console.log(newArticle);

        model.ArticleModel
            .createArticle(bookId, newArticle)
            .then(function (article) {
                res.send(article);
            }, function (error) {
                res.sendStatus(500).send(error);
            });
    }

    function findArticleById(req, res) {
        var articleId = req.params.articleId;

        model.ArticleModel
            .findArticleById(articleId)
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function updateArticle(req, res) {
        var articleId = req.params.articleId;
        var newArticle = req.body;

        model.ArticleModel
            .updateArticle(articleId, newArticle)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function deleteArticle(req, res) {
        var articleId = req.params.articleId;

        model.ArticleModel
            .deleteArticle(articleId)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(
                function (err) {
                    res.status(500).send(err);
                }
            );
    }
};