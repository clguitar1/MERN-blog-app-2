import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateBlog.css';

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: ''
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
      name: this.state.name,
      image: this.state.image,
      description: this.state.description
    }
    axios.post('http://localhost:5000/blogs', blog)
      .then(res => console.log(res.data));

    window.location = '/blogs';
  }

  render() {
    return (
      <div className='CreateBlog mx-auto p-3'>
        <h2>Create New Blog Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              name='image'
              required
              placeholder='Image'
              className='form-control'
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name='description'
              required
              placeholder='Description'
              className='form-control'
              value={this.state.description}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <button className="btn btn-outline-danger">Submit</button>
          <Link to='/blogs' className='btn btn-outline-secondary'>Go Back</Link>
        </form>
      </div>
    );
  }
}

export default CreateBlog;