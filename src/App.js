import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
            <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
