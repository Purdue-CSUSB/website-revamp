const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const member= new Schema({
    name: {
      type: String,
      unique: true
    }, 
    picture: {
      type: String,
      unique: true
    },
    standing: {
      type: String,
    },
    linkedIn: {
        type: String
    },

})

module.exports = model("member", member);