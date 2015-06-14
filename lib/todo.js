var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var schema = mongoose.Schema({
    text: String
});

module.exports = mongoose.model('Todo', schema);
