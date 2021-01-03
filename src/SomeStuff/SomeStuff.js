import React from 'react';

import "./SomeStuff.css";

const something = (props) => {
    return ( //ul unordered list li list element 
        <div className='SomeStuff'>
            <ul id='stuff'>
                <li id='user1'><h4>The Royal Duck</h4> </li>
                <li id='user2'><h4>Lykibo</h4></li>
            </ul>
            <div>
            <p>{props.name}: {props.comment}</p>
            </div>
        </div>
       

    )
};

export default something;