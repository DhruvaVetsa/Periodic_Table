var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/interactive_periodic_table');

let schema = mongoose.Schema(
  {
    user_name_d : {
      type : "String",
      required : true
    },
    game_name_d : {
      type : "String",
      required : true
    },
    review_d : {
      type : "String",
      required : true
    }
  }
)
module.exports = mongoose.model('tasks', schema);