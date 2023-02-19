import React, { useState } from 'react';
import "./Header.scss";

import logo from "../assets/imgs/logo1.svg"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
const [menuToggler, setMenuToggler] = useState(false)


    
    
    return (
            <>
           
            <div className='header'>
                <Link to="/" class="header_logo">
                    <img src={logo} alt=""/>
                </Link>
                <nav className='navbar'>
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
            </div>

            <div class={`nav`+ (menuToggler ? " nav-active" : "")}>
                <div class="nav__content">
                    <div className='nav_content_left'>
                    <nav className='navbar_x'>
                        <ul>
                            <li className='nav__list-item'>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className='nav__list-item'>
                                <NavLink to="/">About</NavLink>
                            </li>
                            <li className='nav__list-item'>
                                <NavLink to="/">Prices</NavLink>
                            </li>
                            <li className='nav__list-item'>
                                <NavLink to="/">Trainers</NavLink>
                            </li>
                            <li className='nav__list-item'>
                                <NavLink to="/">Contact Us</NavLink>
                            </li>
                        </ul>
                     </nav>
                    </div>
                    <div className='nav_content_right'></div>
                    
                </div>
            </div>
            </>
    );
};

export default Header;