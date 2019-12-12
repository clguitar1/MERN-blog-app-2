import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { blog: [] };

    this.deleteBlog = this.deleteBlog.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/blogs/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ blog: res.data });
        //console.log(this.state.blog.comments[0].text);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteBlog() {
    console.log(this.state.blog._id);
    // console.log(this.props.match.params.id);
    // axios.delete(`http://localhost:5000/blogs/${this.state.blog._id}`)
    //   .then(response => {
    //     this.props.history.push('/')
    //     console.log(response.data);
    //   })
    //   .catch(error => console.log(error));
  }

  // https://www.youtube.com/watch?v=OLUe1dXCI9Q
  // Free Code Camp React Project 2 Loading Spinner and Wrap Up
  render() {
    //console.log(this.state.blog.comments[0]);
    // setTimeout(() => {
    //   console.log(this.state.blog.comments[0].text);
    // }, 1000);
    if (!this.state.blog.comments) {
      return <div>Loading...</div>
    }
    // const { _id, comments, description, image, name } = this.state.blog;
    return (
      <div className='ShowBlog'>
        <div>
          <h1>{this.state.blog.name}</h1>
          <img className="img-fluid" src={this.state.blog.image} alt={this.state.blog.image} />
          <p className="lead">{this.state.blog.description}</p>
        </div>
        <div>
          <Link className='btn btn-outline-secondary mr-2' to='/blogs' >Back</Link>
          <Link className='btn btn-outline-success mr-2' to={`/blogs/${this.state.blog._id}/edit`} >Edit</Link>
          <button onClick={this.deleteBlog} className="btn btn-outline-danger">Delete</button>
        </div>

        <div className="comments">
          <div className="card">
            <div className="card-header">
              <h4 className='float-left' >Recent Comments</h4>
              <Link className='float-right btn btn-outline-success mr-2' to={`/blogs/${this.state.blog._id}/comments/new`} >Add New Comment</Link>
            </div>
            <ul className="list-group list-group-flush">
              {this.state.blog.comments.map(comment => {
                return (
                  <li className="list-group-item" key={comment._id}>
                    <p><strong>{comment.author}</strong></p>
                    <p>{comment.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default ShowBlog;