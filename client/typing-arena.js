import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Background from './background.js';
import Contact from './contact.js';
import Header from './header.js';

class TypingArena extends React.Component{
  render() {
    return (
        <div>
          <Header />
          <h1>Typing Arena</h1>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/background' component={Background}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      )
  }
}


export default TypingArena;