import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Settings from './components/Settings';
import Register from './components/Register';
import Article from './components/Article';

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
        <Route path='/article:id' component={Article} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/settings' component={Settings} />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
