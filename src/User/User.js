import React from 'react';

const user = (props) => {
    //a function 
    return( 
        <div>
            <p>I'm a {props.name} and my Rummikub score is {props.age}!</p>
            <p>{props.children}</p>
        </div>
        
    )
};

export default user;