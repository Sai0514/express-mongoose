const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
  name : String,
  price: Number
});

mongoose.model('Book', bookSchema);