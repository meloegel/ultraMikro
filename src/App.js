import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Publications from './components/Publications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/publications" >Publications</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/publications' component={Publications} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
