const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//Created Routes

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Database Stuff
mongoose
  .connect('mongodb://localhost:27017/', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDb Connected'));

//My Actual Routes
app.use('/api');

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server is Started at Port : ${port}`));
