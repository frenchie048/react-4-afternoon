import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div>
          <div className='link-wrap'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}