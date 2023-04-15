const authorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/prueba", authorController.prueba);
    app.get("/api/",authorController.allAuthors);
    app.post("/api/new", authorController.newAuthor);
    app.put('/api/:id',authorController.actualizar);
    app.get('/api/list/:id',authorController.oneAuthor);
    app.delete("/api/:id/delete",authorController.deleteAuthor)
}

