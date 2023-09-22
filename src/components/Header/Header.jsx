import * as React from "react";




// Imports
import logo from '../../logo.svg';
import './HeaderStyle.css'


const Header = () => {


    return (


        <header>

            <div className="logo-header">
                <a href="/">
                <img src={logo} alt="logo" />
                </a>
            </div>

            <nav>
                <ul>
                    <li className="navLinks">
                        <a href="/services">Services</a>
                    </li>
                    <li className="navLinks">
                        <a href="/industries">Industries</a>
                    </li>
                    <li className="navLinks">
                        <a href="/cases">Cases</a>
                    </li>
                    <li className="navLinks">
                        <a href="/contact">Contact</a>
                    </li>
                     
                   {/*
                       call-to-action-button: Let's Talk
                   */}

                    <li className="navLink">
                        <a href="/lets-talk" >
                            <button className="talkButtonLink">
                            Let's Talk
                            </button>
                        </a>
                    </li>
                    

                </ul>
            </nav>
        </header>
    );
};


export default Header;