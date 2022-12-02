import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <div className="container">
            <div className="name">
                 <h1><Link to="/">Fernandez Bridda Fermin</Link></h1>       
            </div>
            <nav className="nav-container">
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
