
module.exports = function (app) {
    var mongoose = require("mongoose");

    var ArticleSchema = mongoose.Schema({
        _book: {type: mongoose.Schema.Types.ObjectId, ref: "book", required: true},
        title: String,
        chapterNumber: Number,
        chapterName: String,
        liked: Number,
        content: String
    }, {collection: "article"});

    return ArticleSchema;
};