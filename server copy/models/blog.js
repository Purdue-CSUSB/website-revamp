const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const blog = new Schema({
     code: {
        type: String,
        unique: true
      }, 
      name: {
        type: String,
        //required: true
      },
      author: {
        type: String,
        //required: true
      },
      content: {
        type: String,
        //required: true
      },
    });

module.exports = model("blog", blog);