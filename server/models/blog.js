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
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "Members"
      },
      summary: {
        type: String,
      },
      // link to image stored in s3 bucket
      image: {
        type: String,
      },
      format: {
        type: String,
      },
      // link to pdf stored in s3 bucket
      content: {
        type: String,
      },
      category: {
        type: String
      }

    });

module.exports = model("blog", blog);