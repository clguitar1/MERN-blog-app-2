const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// INDEX Get all blogs.
router.get('/', (req, res) => {
  Blog.find()
    .then(blogs => {
      res.json(blogs);
      //console.log(blogs);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// NEW /blogs/new is in App.js <Route exact path='/blogs/new' component={CreateBlog} />

// CREATE
router.post('/', (req, res) => {
  const blog = new Blog({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description
  });

  blog.save()
    .then(() => res.json('Blog added!'))
    .catch(err => res.status(400).json("Error: " + err));
});

// SHOW single post
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id).populate('comments').exec((err, foundBlog) => {
    if (err) {
      console.log(err);
    } else {
      res.json(foundBlog);
      //console.log(foundBlog);
    }
  })
  // .then(blog => {
  //   res.json(blog);
  //   console.log(blog);
  // })
  // .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;