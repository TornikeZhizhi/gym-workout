import React, { useState } from 'react';
import "./Header.scss";

import logo from "../assets/imgs/logo1.svg"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
const [menuToggler, setMenuToggler] = useState(false)


    
    
    return (
        <div className='header'>
            <Link to="/" class="header_logo">
                <img src={logo} alt=""/>
            </Link>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="hamburger-icon" id="icon" onClick={()=>setMenuToggler(!menuToggler)}>
                <div className={`icon-1` + (menuToggler ? " a" : "")} id="a"></div>
                <div className={`icon-2` + (menuToggler ? " c" : "")} id="b"></div>
                <div className={`icon-3` + (menuToggler ? " b" : "")} id="c"></div>
                <div className="clear"></div>
            </div>
            
            <nav id="nav"  className={`hamburger_nav` + (menuToggler ? " show" : "")}>
                
                <ul>
                <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            
            </nav>
  
            <div className={`dark-blue` + (menuToggler ? " slide" : "")} id="blue"></div>

        </div>
    );
};

export default Header;