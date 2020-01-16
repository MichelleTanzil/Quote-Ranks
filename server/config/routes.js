var quotesController = require("../controllers/quotes.js");
const path = require("path");

module.exports = function(app) {
  // Get all quthors
  app.get("/quotes", quotesController.getAll);
  // Get one quthor
  app.get("/quotes/:id", quotesController.getOne);
  //Create new author
  app.post("/quotes", quotesController.createAuthor);
  //Update author
  app.put("/quotes/:id", quotesController.updateAuthor);
  // Get all quotes in a author
  app.get("/quotes/all/:id", quotesController.getAllQuotes);
  //Create quote in quotes array
  app.post("/quotes/write/:id", quotesController.createQuote);
  //Delete quote in quotes array
  app.put("/quotes/:id/:quoteid/delete", quotesController.deleteQuote);
  //Downvote quote in quotes array
  app.put("/quotes/:id/:quoteid/downvote", quotesController.downvoteQuote);
  //Upvote quote in quotes array
  app.put("/quotes/:id/:quoteid/upvote", quotesController.upvoteQuote);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
