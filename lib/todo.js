var mongoose = require('mongoose');
var connectionString = "mongodb://" + process.env.MONGO_PORT_27017_TCP_ADDR +
  ":" + process.env.MONGO_PORT_27017_TCP_PORT + "/todo";
mongoose.connect(connectionString);

var schema = mongoose.Schema({
  text: String
});

module.exports = mongoose.model('Todo', schema);
