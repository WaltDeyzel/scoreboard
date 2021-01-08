import React from 'react';

import './Body.css'
import Aux from '../../hoc/Auxx'
import Players from './Players/Players';
import NavBar from './Navbar/Navbar';
import Chart from './Chart/MainChart'

const body = (props) => {

    return (
        <Aux>
            <NavBar/>
            <Chart persons = {props.persons}/>
            <Players players={props.persons} scoreAdd={props.scoreAdd}/>
        </Aux>
    ); 
}

export default body;