import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BlogsList from './components/BlogsList';
import ShowBlog from './components/ShowBlog';
import NavBar from './components/NavBar';
import CreateBlog from './components/CreateBlog';
import CreateNewComment from './components/CreateNewComment';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App container">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/blogs' component={BlogsList} />
            <Route exact path='/blogs/new' component={CreateBlog} />
            <Route exact path="/blogs/:id" component={ShowBlog} />
            <Route exact path='/blogs/:id/comments/new' component={CreateNewComment} />
          </Switch>
        </div>
        <div className="footer">
          <p>This is the footer</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
