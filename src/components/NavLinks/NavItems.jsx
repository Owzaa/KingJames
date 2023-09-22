import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="navbar-brand">Logo</a>

-            <ul className="navbar-nav">

                <li className="nav-item">
                <a href="#" className="nav-link">Services</a>
                </li>

                <li className="nav-item">
                <a href="#" className="nav-link">Industries</a>
                </li>

                <li className="nav-item">
                <a href="#" className="nav-link">Cases</a>
                </li>

                <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
                </li>

                <li className="nav-item">
                <a href="#" className="nav-link">Lets Talk</a>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;