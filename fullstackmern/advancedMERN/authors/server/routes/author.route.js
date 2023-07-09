const AuthorController = require("../controllers/author.controller");

module.exports = (app) =>{
    app.get("/api/Authors", AuthorController.readAll);
    app.post("/api/Authors", AuthorController.create);
    app.get("/api/Authors/:id", AuthorController.findOne);
    app.put("/api/Authors/:id", AuthorController.update);
    app.delete("/api/Authors/:id", AuthorController.delete);


}