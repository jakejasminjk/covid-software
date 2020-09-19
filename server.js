//Used for rest actions such as get and post
const express = require('express');
//Allows us to bypass the cross-origin policy
const cors = require('cors');
//Allows us to make models for or database collections
const mongoose = require('mongoose');

//environment variable
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//const port = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
