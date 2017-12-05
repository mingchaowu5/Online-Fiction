
module.exports = function (app) {
  var mongoose = require("mongoose");

  var BookSchema = mongoose.Schema({
    title: {type: String, required: true},
    authors: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    isbn: String,
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: "article"}],
    subscribers: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    genres: {
      type: [String]
      // enum: ["Science fiction", "Satire", "Drama", "Action and Adventure", "Romance", "Mystery", "Horror",
      //     "Self help", "Health", "Guide", "Travel", "Children's", "Religion, Spirituality & New Age", "Science",
      //     "History", "Math", "Anthology", "Poetry", "Encyclopedias", "Dictionaries", "Comics", "Art",
      //     "Cookbooks", "Diaries", "Journals", "Prayer books", "Series", "Trilogy", "Biographies",
      //     "Autobiographies", "Fantasy"]
    },
    liked: Number,
    description: String
  }, {collection: "book"});

  return BookSchema;
};

/*
 1. title
 2. professor: [ref to users]
 3. course number
 4. articles: [references to articles]
 5. register: []
 6. categories:
 7. liked: number of total liked
 */
