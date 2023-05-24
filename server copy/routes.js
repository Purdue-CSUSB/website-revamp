const express = require("express");
const blog = require("./models/blog.js");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const {MongoClient} = require("mongodb");

const uri = CONNECTION = "mongodb+srv://Arielle:ssu8ACxFolEqshob@blogs.yxjjb5i.mongodb.net/Blogs";

const client = new MongoClient(uri);

app.post("/add-entry", async (req, res) => {
   try {
      await client.connect();
      let blog = {name: req.body.name, author: req.body.author, content: req.body.content}
      const bl = await client.db("Blogs").collection("Entries").insertOne(blog);
      res.status(200).send("success");
   } catch (err) {
      res.status(400).send(err.message);
   } finally {
      await client.close();
   }
});
app.get("/get-entries", async (req, res) => {
   try {
      await client.connect();
      console.log("hello");
      console.log(client.db("Blogs").collection("Entries").find().toArray());
      res.json(await client.db("Blogs").collection("Entries").find().toArray());
   } finally {
      await client.close();
   }
});
/* app.post("/get-blog", async (req, res) => {
   try {
      await client.connect();
      const blog = await client.db("Blogs").collection("Entries").findOne({ name: req.body.name });
      res.json(blog);
   } finally {
      await client.close();
   }


}); */

module.exports = app;