import React from 'react';

import Players from '../PlayerCard/PlayerCard'
import './Player.css'

const playerCard = (props) => {
    return (
        <div className={'Cards'}>
        {props.players.map((person, index) => {
            return (< Players
                Click={() => { props.scoreAdd(person.id) }}
                name={person.name}
                score={person.score}
                key={person.id} />
            
            );
        })}
        </div>
    );
}

export default playerCard;