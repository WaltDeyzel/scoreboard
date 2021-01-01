import React, { Component } from 'react';
import './App.css';

import User from "./User/User";

class App extends Component {
  //Only availible in components that extends component
  state = {
    users : [
      {name: 'WALT', winnings: 1},
      {name: 'LYNN', winnings: 99},
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked')
    // extends component gives setState 
    this.setState({
      users : [
        {name: 'WALT', winnings: 99},
        {name: 'LYNN', winnings: 1},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to golf Royal</h1>
        <button onClick={this.switchNameHandler}>Press me</button>
        <User name={this.state.users[0].name} age={this.state.users[0].winnings}>Slight of hand</User>
        <User name={this.state.users[1].name} age={this.state.users[1].winnings}>Cutting someone in half</User>
      </div>
    );
  }
}

export default App;
