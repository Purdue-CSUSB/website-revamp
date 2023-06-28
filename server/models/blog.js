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
        unique: true,
        //required: true
      },
      author: {
        type: String,
        //required: true
      },
      summary: {
        type: String,
      },
      // link to image stored in s3 bucket
      image: {
        type: String,
        //required: true
      },
      format: {
        type: String,
      },
      // link to pdf stored in s3 bucket
      content: {
        type: String,
        //equired: true
      },

    });

module.exports = model("blog", blog);