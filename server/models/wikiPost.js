const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const WikiPostSchema = new Schema({
    title: {
      type: String,
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "Members"
      }],
    date: {
      type: String,
    },
    description: {
      type: String,
    }, 
    content: {
      type: String,
    },
    category: {
      type: String,
    }
});

// Model

module.exports = model("WikiPost", WikiPostSchema);