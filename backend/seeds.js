const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Comment = require('./models/Comment');

const data = [
  {
    name: "Sunnyvale Camp",
    image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=800&q=60",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis molestiae minus, minima, quo ipsum fugiat voluptatibus, voluptatem adipisci saepe inventore neque laboriosam id. Inventore delectus dicta harum reiciendis quas?"
  },
  {
    name: "Cloud's Rest",
    image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=343c64df1b43f50769656d03c2b9f523&auto=format&fit=crop&w=800&q=60",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis molestiae minus, minima, quo ipsum fugiat voluptatibus, voluptatem adipisci saepe inventore neque laboriosam id. Inventore delectus dicta harum reiciendis quas?"
  },
  {
    name: "Desert Mesa",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d95171e276fbd03de651f9aecb64b53d&auto=format&fit=crop&w=800&q=60",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis molestiae minus, minima, quo ipsum fugiat voluptatibus, voluptatem adipisci saepe inventore neque laboriosam id. Inventore delectus dicta harum reiciendis quas?"
  }
]

function seedDB() {
  // remove all comments
  Comment.remove({}, err => {
    if (err) {
      console.log(err);
    }
    console.log('Removed comments!');
  });
  // remove all blogs
  Blog.remove({}, err => {
    if (err) {
      console.log(err);
    }
    console.log('Removed blog posts!');


    // add a few blogs
    data.forEach((seed) => {
      Blog.create(seed, (err, blog) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Added blog posts!');

          // create a comment
          Comment.create({
            text: 'Great but no internet.',
            author: 'Charles'
          }, (err, comment) => {
            if (err) {
              console.log(err);
            } else {
              blog.comments.push(comment);
              blog.save();
              console.log('created new comment!');
            }
          });
        }
      });
    });
  });

}

module.exports = seedDB;