const mongoose = require('mongoose');

const BookModel = mongoose.model('Book');

// 查询所有数据
const findAllBooks = (callback) => {
  BookModel.find({}).exec((err, books) => {
    if(!err) callback(books)
  })
}

// 添加一条记录
const addBook = (book, callback) => {
  BookModel.create(book, (err, newbook) => {
    if(!err) callback(newbook.toObject())
  })
}

// 删除一条记录
const deleteBook = (id, callback) => {
  BookModel.findByIdAndRemove(id, (err) => {
    if(!err) callback({})
  })
}

// 更新一条记录
const updateBook = (id, book, callback) => {
  BookModel.findOneAndUpdate({_id: id}, book, (err) => {
    if(!err) callback(book)
  })
}

module.exports = {findAllBooks, addBook, deleteBook, updateBook}