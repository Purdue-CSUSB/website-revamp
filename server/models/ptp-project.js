const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const blog = new Schema({
     name: {
        type: String,
        unique: true
      }, 
      subheader: {
        type: String,
        unique: true,
      },
      description: {
        type: String,
        unique: true,
      },
      tag: {
        type: String,
        unique: false,
      },
      // link to image stored in s3 bucket
      image: {
        type: String,
      },
      whyfeature: {
        type: String,
        unique: true
      },
      // link to pdf stored in s3 bucket
      creativeproc: {
        type: String,
        unique: true
      },
      addinfo: {
        type: String,
        unique: false
      },
      devinfo: {
        type: String,
        unique: false
      }

    });

module.exports = model("ptp-projects", ptp-projects);