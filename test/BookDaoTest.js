const mongoose = require("mongoose");
require("../model");
let bookDao = require("../dao/BookDao");
const assert = require("assert");

describe("测试BookDao", function() {
  before(function() {
    mongoose.connect("mongodb://39.100.81.23:27017/books", function(err) {
      if (!err) console.log("mongodb is successful");
    });
  }),
    after(function() {
      mongoose.disconnect();
    }),
    it("测试查询所有书", function(done) {
      bookDao.findAllBooks(books => {
        assert.ok(books.length > 0);
        books.forEach(book => console.log(book._id));
        done();
      });
    });

  it("测试添加一本书", function(done) {
    let book = { name: "d3", price: 45 };
    bookDao.addBook(book, newbook => {
      assert.ok(newbook._id != null);
      console.log(newbook._id);
      done();
    });
  });

  it("测试删除一本书", function(done) {
    let id = "5e15d159457e7088e5b63e31";
    bookDao.deleteBook(id, res => {
      console.log(res);
      done();
    });
  });

  it("测试更新一本书", function(done) {
    let id = "5e15d7fd7f37fe8b2210ec3a";
    let book = { name: "node", price: 50 };
    bookDao.updateBook(id, book, res => {
      assert.ok(res!=null);
      console.log();
      done();
    });
  });
});
