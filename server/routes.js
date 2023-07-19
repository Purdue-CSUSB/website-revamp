const express = require("express");
const blog = require("./models/blog.js");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const Aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const {MongoClient} = require("mongodb");

const uri = process.env.CONNECTION

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
   //console.log(responses)
   
   try {
      await client.connect();
      //console.log(dataLogs)
      //console.log(data.Location)
      try {
         let blog = {
            name: req.body.name, 
            author: req.body.author, 
            summary: req.body.summary,
            image: responses[0].Location,
            format: req.body.format, 
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
app.post("/add-initiative", async(req, res) => {
   await client.connect();
   console.log('aaksjdnfakjdsnfakjsdnfakjsfn')
   console.log(req.body)
   try {
      let initiative = {
         name: req.body.name,
         summary: req.body.description,
         members: req.body.members,
         link: req.body.link,
         linkDescription: req.body.linkDescription

      }
      console.log(req.body.name)
      const bl = client.db("Blogs").collection("Initiatives").insertOne(initiative);
      res.status(200).send("success");
   }
   catch (err) {
         res.status(404).send(err.message);
      }
})
app.post("/add-member", upload.single("file"), async(req,res) => {
   console.log(req.file)
   const params = {
      Bucket:process.env.AWS_BUCKET_NAME,
      Key:req.file.originalname,     
      Body:req.file.buffer,
      ACL:"public-read-write",
   }
   try {
      await client.connect();
       s3.upload(params, (error,data)=>{
        if(error){
            console.log(error);
            res.status(500).send({"err":error})
        }
         let member = {
            name: req.body.name, 
            picture: data.Location,
            standing: req.body.standing,
            linkedIn: req.body.linkedIn
         }

         const bl = client.db("Blogs").collection("Members").insertOne(member);
         res.status(200).send("success");
       })
   } catch (err) {
      res.status(406).send(err.message);
   } 

})
app.get("/members", async(req, res) => {
   try {
      await client.connect();
      res.json(await client.db("Blogs").collection("Members").find().toArray())
   } catch(err) {
      res.status(400).send(err.message)
   }
})
app.get("/graduated", async(req, res) => {
   try {
      await client.connect();

      const members = await client.db("Blogs").collection("Members").find({
         "standing": "Graduated"
      }).toArray()
      res.json(members)
   }catch(err) {
      res.status(400).send(err.message)
   }
})
app.get("/current-members", async(req, res) => {
   try {
      await client.connect();

      const grads = await client.db("Blogs").collection("Members").find({
         "standing": { $ne : "Graduated"}
      }).toArray()
      res.json(grads)
   }catch(err) {
      res.status(400).send(err.message)
   }
})
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

app.get('/get-wiki-posts', async (req, res) => {
   try {
      await client.connect();

      res.json(await client.db("Blogs").collection("wikiposts").find().toArray());

   } catch(err) {
      res.status(400).send(err.message)
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