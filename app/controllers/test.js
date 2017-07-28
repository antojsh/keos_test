var express = require("express"),
  router = express.Router(),
  db = require("../models");

module.exports = function(app) {
  app.use("/test", router);
};

router
  .route("/")
  .get((req, res) => {
    db.test.findAll().then(function(test) {
      res.json(test);
    });
  })
  .post((req, res) => {
    let params = req.body
    db.test.create(params)
    .then(article => {
      res.json(article);
    })
    .catch(err =>{
      res.status(500).send(err)
    })
  });

router
  .route("/:id")
  .get((req, res) => {
    db.test.getById(req.params.id).then(data => {
      res.json(data);
    });
  })
  .put((req, res) => {
    db.test
      .update(req.body, {
        where: {
          idtest: req.params.id
        },
        returning: true,
        plain: true
      })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  })
  .delete((req, res) => {
    db.test
      .destroy({
        where: {
          idtest: req.params.id
        },
        returning: true,
        plain: true
      })
      .then(data => {
        res.status(204).send({})
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
