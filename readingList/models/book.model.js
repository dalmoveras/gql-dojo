const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const bookSchema = new Schema({
  name:{type:String},
  genre:{type:Number},
  authorId:{type:String}
});

module.exports = mongoose.model("Book", bookSchema);
