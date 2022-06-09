const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true ,  useNewUrlParser: true }
  );
  const connection = mongoose.connection;
 
  connection.once('open', () => {
  
    console.log("MongoDB is connected");
  })
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  const usersRouter = require('./Routes/users');
  app.use('/users', usersRouter);

  const amuseRouter = require('./Routes/amusement')
  app.use('/amusements', amuseRouter)
  
  const eventRouter = require('./Routes/events')
  app.use('/events', eventRouter)

  const commentRouter = require('./Routes/comment')
  app.use('/comments', commentRouter)
  
  app.listen(port, () =>{
  
    console.log(`server is running on port: ${port}`);
});
// Here is the magic comment