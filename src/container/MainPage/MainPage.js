import React, { Component } from 'react';

import './MainPage.css';
import Aux from '../../hoc/Auxx';
import Players from '../../components/Players/Players';
import Chart from '../../components/Chart/MainChart';
import firebase from "../../utils/firebase"

class MainPage extends Component {
  
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

  initialise = () =>{ //for testing, later do this elsewhere (TODO)
    const playersDB = firebase.database().ref("Players");
    const player={ //id given by database
      name: "Walt",
      score: 5,
      colour: 'rgba(255, 99, 132, 0.6)',
      pictureid: '',
    }
    playersDB.push(player);

    const playertoadd={ //id given by database
      name: "Lynn",
      score: 8,
      colour: 'rgba(255, 206, 86, 0.6)',
      pictureid: '',
    }
    playersDB.push(playertoadd)
  }

  // undo = () =>{//for testing, later do this elsewhere (TODO)
  //   const playersDB = firebase.database().ref("Players");
  //   playersDB.on("value",(snapshot)=>{ //on value change in database, snapshot is a function saying what it should do
  //     //console.log(snapshot.val()); //tracing statement
  //     const players = snapshot.val(); //object containing all todo objects
  //     for (let id in players){
  //       const playerInDB = firebase.database().ref("Players").child(id);
  //       playerInDB.remove();
  //     }
  //   });
 
    
  // }

    render() {
      
        return (
            <Aux>
                <Chart persons={this.state.persons} />
                <Players players={this.state.persons} scoreAdd={this.addScoreHandler} />
                {/* <button onClick={this.initialise}>don't click this button</button> */}
                {/* <button onClick={this.undo}>click this if you did anyway</button> */}
            </Aux>
        );
    }
}

export default MainPage;