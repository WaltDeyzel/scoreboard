import React, { Component } from 'react';
import './App.css';

import Header from "./Head/Head";
import Players from "./Chart/Players"

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
        <Header />
        <ul>
          <li id="nav-side"><div className='Temp'></div></li>
          <li id="chart-side">
            <ul>
              <li><div className='Temp2'></div></li>
              <li>
                <div>
                  {this.state.persons.map((person, index) => {
                    return (< Players
                      Click={() => { this.addScoreHandler(person.id) }}
                      name={person.name}
                      score={person.score}
                      key={person.id} />
                    )
                  })}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;