import React from 'react';

import "./PlayerCard.css";

const players = (props) => {

    return (
        <div className='Player'>
            <ul className="Card">
                <li><h3>{props.score}</h3></li>
                <li onClick={props.Click}><h3>{props.name}</h3></li>
            </ul>
        </div>
        )
    }

export default players;