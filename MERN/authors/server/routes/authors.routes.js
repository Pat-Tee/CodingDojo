const AuthorsController = require("../controllers/authors.controllers.js");

module.exports = app => {
    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.post("/api/authors", AuthorsController.createNewAuthor);
    app.get("/api/authors/random", AuthorsController.getRandomAuthor);
    app.get("/api/authors/:id", AuthorsController.findById);
    app.put("/api/authors/:id", AuthorsController.updateAuthor);
    app.delete("/api/authors/:id", AuthorsController.deleteAuthor);

}