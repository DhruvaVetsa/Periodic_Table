var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/interactive_periodic_table');

let schema = mongoose.Schema(
  {
    element : {
      type : "String",
      required : true
    },
    note : {
      type : "String",
      required : false
    }
  }
)
module.exports = mongoose.model('tasks', schema);