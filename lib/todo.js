var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION);

var schema = mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Todo', schema);
