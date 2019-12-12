import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogsList.css';

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className='jumbotron'>
          <h1>Yoga Exercise List</h1>
          <p className="lead">View helpful yoga poses or add one of your favorites.</p>
          <Link to='/blogs/new' className='btn btn-outline-secondary'>Add a New Yoga Pose</Link>
        </div>
        <div className='BlogsList row'>
          {this.state.blogs.map(blog => {
            const { name, image, _id } = blog;
            return (
              <div key={_id} className="col-md-4">
                <div className='BlogDetails card mb-4 shadow-sm' >
                  <img className='card-img-top' src={image} alt={image} />
                  <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    {/* <p className='card-text'>{`${body.substring(0, 100)}...`}</p> */}
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-secondary" to={`/blogs/${_id}`}>View</Link>
                        <Link className="btn btn-sm btn-outline-secondary" to={`/blogs/${_id}/edit`}>Edit</Link>
                      </div>
                      {/* <small className='ml-3 text-muted'>{createdDate.toDateString()}</small> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default BlogsList;