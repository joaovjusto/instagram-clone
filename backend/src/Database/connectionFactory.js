const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:admin@cluster0-jywfu.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})