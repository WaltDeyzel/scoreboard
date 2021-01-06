import React from 'react';

import './Body.css'
import Aux from '../../hoc/Auxx'
import PlayerCard from './PlayerCard/PlayerCard';
import NavBar from './Navbar/Navbar';
import Chart from './Chart/MainChart'

const body = (props) => {

    return (
        <Aux>
            <NavBar/>
            <Chart names={props.names} scores={props.scores} colours={props.colours}/>
            <PlayerCard players={props.persons} scoreAdd={props.scoreAdd}/>
        </Aux>
    ); 
}

export default body;