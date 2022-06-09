const express = require('express');
const mongoose = require('mongoose');
var exphbs = require("express-handlebars");
const imageModel = require("./models/upload");
require('dotenv').config();
const multer = require("multer");

const imageData = imageModel.find({})

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public/images"));
app.use(express.static("public"));
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true ,  useNewUrlParser: true }
  );
  const connection = mongoose.connection;
 
  connection.once('open', () => {
  
    console.log("MongoDB is connected");
  })
  var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/images");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  });
  var upload = multer({
    storage: Storage,
  }).single("image"); //Field name and max count
  
  app.get("/gallery", (req, res) => {
  
      imageData.exec(function(err,data){
          if(err) throw err;
  
          console.log(data)
  
          res.render('photo',{records:data})
      })
  });
  
  app.post("/gallery", (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.end("Something went wrong");
      } else {
        console.log(req.file.path);
        var imageName = req.file.filename;
  
  
        var imageDetails = new imageModel({
          imagename: imageName,
  
        });
  
        imageDetails.save(function (err, doc) {
          if (err) throw err;
  
          console.log("Image Saved");
  
          imageData.exec(function(err,data){
              if(err) throw err;
  
  
              res.render('photo',{records:data,success:true})
          })
        });
      }
    });
  });
  const usersRouter = require('./Routes/users');
  app.use('/user', usersRouter);

  const amuseRouter = require('./Routes/amusement')
  app.use('/amusements', amuseRouter)
  
  const eventRouter = require('./Routes/events')
  app.use('events', eventRouter)

  const commentRouter = require('./Routes/comment')
  app.use('/comment', commentRouter)
  
  app.listen(port, () =>{
  
    console.log(`server is running on port: ${port}`);
});
// Here is the magic comment