const QuoteController = require("../controllers/quote.controller.js");

module.exports = app => {
    app.get("/api", QuoteController.helloworld);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createNewQuote);
    app.get("/api/quotes/random", QuoteController.getRandomQuote);
    app.get("/api/quotes/:id", QuoteController.findById);
    app.put("/api/quotes/:id", QuoteController.updateQuote);
    app.delete("/api/quotes/:id", QuoteController.deleteQuote);

}