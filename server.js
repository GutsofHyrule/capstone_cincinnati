const express = require('express');
const mongoose = require('mongoose');

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




  app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
});