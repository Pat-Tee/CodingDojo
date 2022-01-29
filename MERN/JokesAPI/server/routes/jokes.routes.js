const JokesController = require("../controllers/jokes.controllers.js");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes", JokesController.createNewJoke);
    app.get("/api/jokes/random", JokesController.getRandomJoke);
    app.get("/api/jokes/:id", JokesController.findById);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);
}