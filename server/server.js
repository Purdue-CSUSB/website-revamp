
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({ origin: "http://localhost:3000"}));


{/*
const dotenv = require("dotenv");
dotenv.config();

const Router = require("./routes.js")

const app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(Router);

*/}

// use dotenv to secure this password later on

const uri = CONNECTION = "mongodb+srv://Arielle:ssu8ACxFolEqshob@blogs.yxjjb5i.mongodb.net/Blogs";

//const URI = "mongodb+srv://Arielle:ssu8ACxFolEqshob@blogs.yxjjb5i@blogs.yxjjb5i.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(CONNECTION)
  .then(console.log("Connection successful"))
  .catch((err) => console.log(err))


  app.listen(8080, () => {
  console.log("Server is running at port 8080");
});

mongoose.connection.on('connected', () => {
  console.log("Connected!");
});

const Schema = mongoose.Schema;
const WikiPostSchema = new Schema({
    title: {
      type: String,
    },
    author: {
      type: String,
    },
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
const WikiPost = mongoose.model('WikiPost', WikiPostSchema);

// Save data to Mongo Database

{ /*
const data = {
  title: "How Do I Become an Undergrad­uate Teaching Assistant - Copy?", 
  author: "Noah Alderton",
  date: "March 4, 2020",
  description: "Get paid to help students during labs",
  content: "https://purdueusb.com/wiki/become-uta",
  category: "campus"
  
};

*/ }


//.save()
// const newWikiPost = new WikiPost(data); // instance of the model


// newWikiPost.save();




// get data from mongodb to localhost/api.
// from there, we can later display items on screen


// do we at least need to send some piece of dat over to the mongo db before anything actually works??
// __v: 0 - what does that mean 



app.get('/api', (req, res) => {

    console.log("here");

    WikiPost.find({ })
      .then((data) => {
        console.log('Data: ', data);
        res.json(data);
      })
      .catch((error) => {
        console.log('error: ', error);

      });

});
