import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <h1>LandingPage</h1>
      <p>Welcome to the Yoga Blog</p>
      <Link className="btn btn-sm btn-outline-secondary" to='/blogs' >View All Yoga Blog Posts</Link>
    </div>
  );
}

export default LandingPage;