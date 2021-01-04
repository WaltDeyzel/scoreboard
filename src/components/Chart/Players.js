import React from 'react';

import "./Players.css";

const players = (props) => {

    return (
        <div className='Player'>
            <ul>
                <li><h1>{props.score}</h1></li>
                <li onClick={props.Click}><h1>{props.name}</h1></li>
            </ul>
        </div>
        )
    }

export default players;