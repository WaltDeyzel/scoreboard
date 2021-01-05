import React from 'react';

import Players from '../Players/Players'

const playerCard = (props) => {
    return (

        props.players.map((person, index) => {
            return (< Players
                Click={() => { props.scoreAdd(person.id) }}
                name={person.name}
                score={person.score}
                key={person.id} />
            );
        })
    );
}

export default playerCard;