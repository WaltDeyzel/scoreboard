import React from 'react';
import './Navbar.css';
import { Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const navBar = (props) => {

    return (
        <div className='Navbar'>
            <ul className="Tiles">
                <li><Link to="/"><h3>Home</h3></Link></li>
                <li><Link to="/user-profile"><h3>Profile</h3></Link></li>
                <li><Link to="/user-stats"><h3>Stats</h3></Link></li>
                <li><Link><h3>icon</h3></Link></li>
                <li><Link><h3>icon</h3></Link></li>
            </ul>
        </div>
    );
}

export default navBar;