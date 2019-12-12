const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

const Comment = require('../models/Comment');

// NEW show the new comment form GET blogs/:id/comments/new  
router.get('/:id/comments/new', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
      res.json(comment);
      console.log(comment);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// CREATE new comment POST blogs/:id/comments
router.post('/:id/comments', (req, res) => {
  // find blog using id
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
      res.status(400).json("Error: " + err);
    } else {
      const text = req.body.text;
      const author = req.body.author;
      // console.log(req.body);
      // res.json('POST request to blogs/:id/comments');
      // create new comment
      Comment.create(req.body, (err, comment) => {
        if (err) {
          console.log(err);
        } else {
          blog.comments.push(comment)
          blog.save();
          res.json(comment);
          console.log(comment);
        }
      });
      // connect new comment to blog

      // redirect to blog show page
    }
  })
});

module.exports = router;