import React, { Component } from 'react';
import {BrowserRouter, Link, Redirect, Route,Switch} from 'react-router-dom';

import './App.css';

import Main from './container/Main';

class App extends Component {
  render() {
    return (

    <div className="container-fluid">
        <BrowserRouter >
          <Main />
        </BrowserRouter>
    </div>
    ); 
  }
}

export default App;
