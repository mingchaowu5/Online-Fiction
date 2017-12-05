
module.exports = function (app, model) {
    app.get("/aw/api/gr/isbn/:isbn", findReviewsByISBN);
    app.get("/aw/api/gr/title/:title", findBooksByTitle);

    var key = "ejIk3vTLwi3vJAPx0HHgjA";

    var request = require("request");
    var parseString = require('xml2js').parseString;

    function findReviewsByISBN(req, res) {
        var isbn = req.params.isbn;
        var baseUrl = "https://www.goodreads.com/book/isbn/ISBN?format=xml&key=KEY";
        var url = baseUrl.replace("ISBN", isbn).replace("KEY", key);

        request(url, function(error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);

            parseString(body, function (err, result) {
                res.json(result);
            });
        });
    }

    function findBooksByTitle(req, res) {
        var title = req.params.title;
        title = title.replace(' ', '+');
        console.log(title);
        var baseUrl = "https://www.goodreads.com/book/title.xml?title=TITLE&key=KEY";
        var url = baseUrl.replace("TITLE", title).replace("KEY", key);

        request(url, function(error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);

            parseString(body, function (err, result) {
                if(err) {
                    res.send(500);
                } else {
                    res.json(result);
                }
            });
        });
    }
};


/*
 var parseString = require('xml2js').parseString;
 var xml = "<root>Hello xml2js!</root>"
 parseString(xml, function (err, result) {
 console.dir(result);
 });
 */