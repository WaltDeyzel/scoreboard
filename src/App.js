import React, { Component } from 'react';
import './App.css';

import Header from "./Head/Head"; //blank implies .js file //give any name 
import Stuff from "./SomeStuff/SomeStuff"

class App extends Component { //javascript
  //STATE CONTAINS THE DATA FROM SERVER/DATABASE
  state = {
    info : [
      {name: 'Lynn', comment: "UCT is superiour"},
      {name: 'Walt', comment: "100% agree"},
    ]
  }

  onClickyClick = () =>{

    this.setState({
      info : [
        {name: 'Lynn', comment: "Where did you learn to nap?"},
        {name: 'Walt', comment: "Stellies taught me, we have too much time on our hands"},
      ]
    })
  
  }

  render() { //stateful component have this.
    return ( //returns jsx - looks like HTML - what to render. Divider that contains everything
      <div className="App"> 
        <Header/>
        <Stuff name={this.state.info[0].name} comment={this.state.info[0].comment}></Stuff>
        <Stuff name={this.state.info[1].name} comment={this.state.info[1].comment}></Stuff>
        <button onClick = {this.onClickyClick}>Click me</button>
      </div>
    );
  }
}

export default App;
