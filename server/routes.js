const express = require("express");
const blog = require("./models/blog.js");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const Aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const {MongoClient} = require("mongodb");

const uri = CONNECTION = "mongodb+srv://Arielle:ssu8ACxFolEqshob@blogs.yxjjb5i.mongodb.net/Blogs"

const client = new MongoClient(uri);

const storage = multer.memoryStorage({
   destination: function (req, file, cb) {
       cb(null, '')
   }
})

const s3 = new Aws.S3({
   accessKeyId:process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})


const upload = multer({ storage: storage });

app.post("/add-entry", upload.array("files", 2), async (req, res) => {
   //console.log(req.files)
   const file = req.files

   //console.log(file[1])
   //console.log(file)
   var dataLogs = [];
   const params = [
      {
         Bucket:process.env.AWS_BUCKET_NAME,
         Key:file[0].originalname,     
         Body:file[0].buffer,
         ACL:"public-read-write",
      },
      {
         Bucket:process.env.AWS_BUCKET_NAME,
         Key:file[1].originalname,     
         Body:file[1].buffer,
         ACL:"public-read-write",
      }
   ];
   const responses = await Promise.all(params.map(param =>
      s3.upload(param).promise()))
   console.log(responses)
   
   try {
      await client.connect();
      //console.log(dataLogs)
      //console.log(data.Location)
      try {
         let blog = {
            name: req.body.name, 
            author: req.body.author, 
            image: responses[0].Location, 
            content: responses[1].Location
         }

         const bl = client.db("Blogs").collection("Entries").insertOne(blog);
         res.status(200).send("success");
      } catch (err) {
         res.status(404).send(err.message);
      }
   } catch (err) {
      res.status(406).send(err.message);
   } 
   

});

app.get("/get-entries", async (req, res) => {
   try {
      await client.connect();
      //console.log("hello");
      //console.log(await client.db("Blogs").collection("Entries").find().toArray());
      res.json(await client.db("Blogs").collection("Entries").find().toArray());
   } catch(err) {
      res.status(400).send(err.message);
   }
});
/*
app.post("/upload-image", upload.single(file), async(req, res) => {
   const params = {
      Bucket:process.env.AWS_BUCKET_NAME,
      Key:req.file.originalname,     
      Body:req.file.buffer,
      ACL:"public-read-write",
  };

   s3.upload(params, (error, data)=>{
      if(error){
          console.log(error);
          res.status(500).send({"err":error})
      }

      console.log(data)

      
  })
})
app.post("/upload-body", upload.single(file), async(req, res) => {

})
*/

module.exports = app;