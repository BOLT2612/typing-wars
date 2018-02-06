import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h2>Header Component</h2>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/background'>Background</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      )
  }
}