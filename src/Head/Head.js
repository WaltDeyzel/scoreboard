import React from 'react';

import "./Head.css";

const header = (props) => {
    return ( //ul unordered list li list element 
        <header className='Head'>
            <ul id='header_list'>
                <li id='site_name'><h1>The Royal Duck</h1> </li>
                <li id='profile_button'><h4>Profile</h4></li>
            </ul>
        </header>

    )
};

export default header;