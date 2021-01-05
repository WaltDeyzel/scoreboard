import React from 'react';

import './Body.css'
import './Navbar/Navbar.css';
import './Chart/Chart.css'
import Aux from '../../hoc/Auxx'
import PlayerCard from './PlayerCard/PlayerCard';
import NavBar from './Navbar/Navbar';
import Chart from './Chart/Chart'

const body = (props) => {

    return (
        <Aux>
            <NavBar/>
            <Chart/>
            <PlayerCard players={props.persons}/>
        </Aux>
    );
}

export default body;