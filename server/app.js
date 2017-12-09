module.exports = function(app) {
  let db = require("./model/model.server");
  require("./services/user.service.server.js")(app);
  require("./services/book.service.server.js")(app);
  require("./services/article.service.server.js")(app);
  require("./services/comment.service.server")(app);
};
