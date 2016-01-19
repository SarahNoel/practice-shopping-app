var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  name: String,
  price: String,
  description: String
});

module.exports = mongoose.model('items', Item);
