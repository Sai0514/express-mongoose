var express = require("express");
var router = express.Router();

var maxId = 2;
var books = [
  { _id: 1, name: "java", price: 85 },
  { _id: 2, name: "python", price: 60 }
];

router
  .route("/")
  .get((req, res) => {
    let data = { code: 201, body: books };
    res.json(data);
  })
  .post((req, res) => {
    let book = req.body;
    book._id = ++maxId;
    books.push(book);
    let data = { code: 202, body: book };
    res.json(data);
  });

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  let index = books.findIndex(book => book._id == id);
  books.splice(index, 1);
  let data = { code: 203, body: {} };
  res.json(data);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let book = req.body;
  book._id = id;
  let index = books.findIndex(book => book._id == id);
  books.splice(index, 1, book);
  let data = { code: 204, body: book };
  res.json(data);
});

module.exports = router;
