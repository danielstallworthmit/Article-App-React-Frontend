import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
})

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
        <h1>To Do App!</h1>
          {this.props.appName}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
