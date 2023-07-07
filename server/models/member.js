const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const member= new Schema({
    name: {
      type: String,
      unique: true
    }, 
    profile: {
      type: String,
      unique: true
  },
    linkedIn: {
        type: String
    }

})

module.exports = model("member", member);