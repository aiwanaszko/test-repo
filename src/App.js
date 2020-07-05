import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About/About.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={'/'} >Home </Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/about'}>About</Link>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
