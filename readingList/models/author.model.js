const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const authorSchema = new Schema({
  name:{type:String},
  age:{type:Number},
});

module.exports = mongoose.model("Author", authorSchema);
