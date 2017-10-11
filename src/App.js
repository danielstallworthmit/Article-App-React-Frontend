import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

import {Route} from 'react-router-dom';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = store.getState();
  // }

  // componentWillMount() {
  //   store.subscribe(() => this.setState(store.getState()));
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
