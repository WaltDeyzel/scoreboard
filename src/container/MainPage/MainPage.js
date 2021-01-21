import React, { Component } from 'react';

import './MainPage.css';
import Aux from '../../hoc/Auxx';
import Players from '../../components/Players/Players';
import Chart from '../../components/Chart/MainChart';
import Rankings from '../../components/Rankings/Rankings'

class MainPage extends Component {

  //STATE CONTAINS THE DATA FROM SERVER/DATABASE
  state = {
    persons: [
      { id: 'dgds', name: 'Walt', score: 21, colour: 'rgba(255, 99, 132, 0.6)' },
      { id: 'asgr', name: 'Lynn', score: 22, colour: 'rgba(255, 206, 86, 0.6)' },
      { id: 'asfr', name: 'Jessica', score: 23, colour: 'rgba(54, 162, 235, 0.6)' },
      { id: 'frad', name: 'Damon', score: 23, colour: 'rgba(75, 192, 192, 0.6)'},
      { id: 'ssfr', name: 'asdsad', score: 42, colour: 'rgba(54, 162, 235, 0.6)' },
    ]
  }


  addScoreHandler = (id) => {
    const personIndex = this.state.persons.findIndex(player => {
      return (player.id === id);
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
            <Aux>
                <Chart persons={this.state.persons} />
                <Players players={this.state.persons} scoreAdd={this.addScoreHandler} />
                <Rankings players={this.state.persons} />
            </Aux>
        );
    }
}

export default MainPage;