
module.exports = function (app, model) {
    app.post("/aw/api/writer/:userId/book", createBook);
    app.get("/aw/api/book/popular/:amount", findPopularBooks);
    app.get("/aw/api/book/all", findAllBooks);
    app.get("/aw/api/book/:bookId", findBookByBookId);
    app.get("/aw/api/book", findBooks);
    app.put("/aw/api/book/:bookId", updateBook);
    app.delete("/aw/api/book/:bookId", deleteBook);

    function findBooks(req, res) {
        var authorId = req.query.authorId;
        var authorFirstName = req.query.authorFirstName;
        var authorLastName = req.query.authorLastName;
        var ISBN = req.query.ISBN;

        if (authorId) {
            findBooksByAuthorId(req, res);
        } else if (authorFirstName && authorLastName) {
            findBooksByAuthorName()
        } else if (ISBN) {
            findBookByISBN(req, res);
        }
    }

    function findBookByISBN(req, res) {
        // TODO
    }

    function findPopularBooks(req, res) {
        var amount = req.params.amount;
    }

    function findAllBooks(req, res) {
        model.BookModel.findAllBooks()
            .then(
                function (books) {
                    res.json(books);
                }
            );
    }

    function findBooksByAuthorName(req, res) {
        // TODO: implement this
    }
    /*
    function findUser(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if (username && password) {
            findUserByCredentials(req, res);
        } else if (username) {
            findUserByUsername(req, res);
        }
    }
    */

    function findBooksByAuthorId(req, res) {
        var authorId = req.query.authorId;

        model.BookModel
            .findAllBooksForAuthor(authorId)
            .then(
                function (response) {
                    res.send(response);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function createBook(req, res) {
        var userId = req.params.userId;
        var newBook = req.body;

        model.BookModel
            .createBook(userId, newBook)
            .then(function (book) {
                res.send(book);
            }, function (error) {
                res.sendStatus(500).send(error);
            });
    }

    function findBookByBookId(req, res) {
        var bookId = req.params.bookId;

        model.BookModel
            .findBookById(bookId)
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function updateBook(req, res) {
        var bookId = req.params.bookId;
        var newBook = req.body;

        model.BookModel
            .updateBook(bookId, newBook)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function deleteBook(req, res) {
        var bookId = req.params.bookId;

        model.BookModel
            .deleteBook(bookId)
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