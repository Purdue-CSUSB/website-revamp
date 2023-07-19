const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const initiative = new Schema({
     code: {
        type: String,
        unique: true
      }, 
      name: {
        type: String,
        unique: true,
      },
      members: [{
        type: Schema.Types.ObjectId,
        ref: "Members"
      }],
      summary: {
        type: String,
      },
      link: {
        type: String,
      },
      linkDescription: {
        type: String
      }

    });

module.exports = model("initiative", initiative);