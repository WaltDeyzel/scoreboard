import React, { Component } from 'react';
import './App.css';

import Header from "../components/Head/Head";
import Body from "../components/Body/Body"

class App extends Component {
  //STATE CONTAINS THE DATA FROM SERVER/DATABASE
  state = {
    persons: [
      { id: 'dgds', name: 'Walt', score: 21 },
      { id: 'asgr', name: 'Lynn', score: 22 },
      { id: 'asfr', name: 'Jessica', score: 23 },
      { id: 'frad', name: 'Damon', score: 23 },
    ]
  }

  addScoreHandler = (id) => {
    const personIndex = this.state.persons.findIndex(player => {
      return (player.id == id);
    })
    console.log(personIndex)
    //pointer --> = this.state.persons[personIndex]
    const player = { ...this.state.persons[personIndex] };

    player.score += 1;

    const personsNew = [...this.state.persons];
    personsNew[personIndex] = player

    this.setState({
      persons: personsNew
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Body persons={this.state.persons} scoreAdd={this.addScoreHandler}/>
      </div>
    );
  }
}

export default App;