import React from 'react';
import "./Header.scss";

import logo from "../assets/imgs/logo1.svg"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    
    return (
        <div className='header'>
            <Link to="/" class="header_logo">
                <img src={logo} alt=""/>
            </Link>
            <nav>
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
        </div>
    );
};

export default Header;