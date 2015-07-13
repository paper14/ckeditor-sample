var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {

  var imageSchema = new mongoose.Schema({
    image_url: String,
    name: String,
    originalname: String,
    path: String
  });

  return mongoose.model('Image', imageSchema);
}();