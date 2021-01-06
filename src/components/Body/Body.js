import React from 'react';

import './Body.css'
import Aux from '../../hoc/Auxx'
import PlayerCard from './PlayerCard/PlayerCard';
import NavBar from './Navbar/Navbar';
import Chart from './Chart/BarChart'

const body = (props) => {

    return (
        <Aux>
            <NavBar/>
            <Chart names={props.names} scores={props.scores}/>
            <PlayerCard players={props.persons} scoreAdd={props.scoreAdd}/>
        </Aux>
    ); 
}

export default body;