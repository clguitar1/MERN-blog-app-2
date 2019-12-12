const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const seedDB = require('./seeds');

// seedDB();
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection succesful...');
});

// Routes
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
app.use('/blogs', blogsRouter);
app.use('/blogs', commentsRouter);
// Nested routes for comments association
// NEW     blogs/:id/comments/new  GET
// CREATE  blogs/:id/comments      POST 

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});