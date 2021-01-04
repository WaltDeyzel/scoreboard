import React from 'react';

import "./Head.css";
// import pfp from './WaltPFP.png' //later have users upload one

const header = (props) => {
    return (
        <header className='Head'>
            <ul id='header_list'>
                <li id='site_name'><h1>Golf Royale</h1> </li>
                <li id='profile_image'><img src="https://images.fd.nl/archive/77923_nieuwe-bronnen2web.jpg?fit=crop&crop=faces&auto=format%2Ccompress&q=45&w=360&h=360&fm=jpg&cs=tinysrgb" width="100px" height="100px"></img></li>
            </ul>
        </header>
    )
};

export default header;