import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import './CreateBlog.css';

class CreateNewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const blog = {
      text: this.state.text,
      author: this.state.author
    }
    // New comment route 
    // POST request to blogs/:id/comments
    axios.post(`http://localhost:5000/blogs/${this.props.match.params.id}/comments`, blog)
      .then(res => {
        console.log(res.data);
        // redirect back to /blogs/:id
        this.props.history.push(`/blogs/${this.props.match.params.id}`)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='CreateNewComment mx-auto p-3'>
        <h2>Create New Comment</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Text</label>
            <input
              type="text"
              name='text'
              required
              placeholder='Text'
              className='form-control'
              value={this.state.text}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>author</label>
            <input
              type="text"
              name='author'
              required
              placeholder='Author'
              className='form-control'
              value={this.state.author}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-outline-danger">Submit</button>
          <Link to={`/blogs/${this.props.match.params.id}`} className='btn btn-outline-secondary'>Go Back</Link>
        </form>
      </div>
    );
  }
}

export default CreateNewComment;