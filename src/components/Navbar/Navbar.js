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
<<<<<<< HEAD
                <li><Link to="/to-do"><h4>ToDo</h4></Link></li>
                <li><Link><h4>icon</h4></Link></li>
=======
                <li><Link to="/user-stats"><h4>icon</h4></Link></li>
                <li><Link to="/user-stats"><h4>icon</h4></Link></li>
>>>>>>> 1ff3abe5c4b7eb10d9c69b135e91243f5169905c
            </ul>
        </div>
    );
}

export default navBar;