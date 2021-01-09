import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const navBar = (props) => {
    return (
        <div className='Navbar'>
            <ul className="Things">
                <li><FontAwesomeIcon icon={faCoffee}/></li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
            </ul>
        </div>
    );
}

export default navBar;