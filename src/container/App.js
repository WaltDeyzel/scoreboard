import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Header from "../components/Head/Head";
import Body from "../components/Body/Body"
import Layout from "../components/Layout/Layout"

class App extends Component {
  //STATE CONTAINS THE DATA FROM SERVER/DATABASE
  state = {
    persons: [
      { id: 'dgds', name: 'Walt', score: 21, colour: 'rgba(255, 99, 132, 0.6)' },
      { id: 'asgr', name: 'Lynn', score: 22, colour: 'rgba(255, 206, 86, 0.6)'},
      { id: 'asfr', name: 'Jessica', score: 23, colour: 'rgba(54, 162, 235, 0.6)' },
      { id: 'frad', name: 'Damon', score: 23, colour: 'rgba(75, 192, 192, 0.6)'},
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
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header/>
            <Body persons={this.state.persons} scoreAdd={this.addScoreHandler} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;