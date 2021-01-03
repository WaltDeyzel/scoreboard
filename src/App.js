import React, { Component } from 'react';
import './App.css';

import Header from "./Head/Head";

class App extends Component {
  //STATE CONTAINS THE DATA FROM SERVER/DATABASE
  state = {
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
