var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_PORT_27017_TCP);

var schema = mongoose.Schema({
    text: String
});

module.exports = mongoose.model('Todo', schema);
