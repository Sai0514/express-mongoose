var express = require("express");
var router = express.Router();

var bookDao = require('../dao/BookDao')

router
  .route("/")
  .get((req, res) => {
    bookDao.findAllBooks((books) => {
      res.json(books)
    })
  })
  .post((req, res) => {
    let book = req.body;
    bookDao.addBook(book, (nb) => {
      res.json(nb)
    })
  });

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  bookDao.deleteBook(id, (obj) => {
    res.json(obj)
  })
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let book = req.body;
  bookDao.updateBook(id, book, (obj) => {
    res.json(obj)
  })
});

module.exports = router;
