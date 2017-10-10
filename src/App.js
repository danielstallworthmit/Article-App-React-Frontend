import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import PropTypes from 'prop-types';

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
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(App);
