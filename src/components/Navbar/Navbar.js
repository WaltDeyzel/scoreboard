import React from 'react';
import './Navbar.css';
import { Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const navBar = (props) => {

    return (
        <div className='Navbar'>
            <ul className="Tiles">
                <li><Link to="/"><h4>Home</h4></Link></li>
                <li><Link to="/user-profile"><h4>Profile</h4></Link></li>
                <li><Link to="/user-stats"><h4>Stats</h4></Link></li>
                <li><Link to="/user-stats"><h4>icon</h4></Link></li>
                <li><Link to="/user-stats"><h4>icon</h4></Link></li>
            </ul>
        </div>
    );
}

export default navBar;