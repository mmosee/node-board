module.exports = app => {

    const tutorials = require("../controllers/tutorial.controller.js");
    
    var router = require("express").Router();

    router.post("/", tutorials.create);

    router.get("/", tutorials.findAll);

    router.get("/published", tutorials.findAllPublished);

    router.get("/:id", tutorials.findOne);

    router.post("/p/:id", tutorials.update);

    router.post("/d/:id", tutorials.delete);

    router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);

};