import React, { useContext, useEffect, useState } from 'react';
import "./Header.scss";

import logo from "../assets/imgs/logo1.svg"
import { Link, NavLink,useLocation } from 'react-router-dom';
import { HeaderTogglerTheme } from '../Contexts/HeaderTogglerContext';

const Header = () => {
    
const [ScrollTop, setScrollTop] = useState(false)
// const [loader,setLoader] = useState(false)

const [scrollPercent, setScrollPercent] = useState(0)




var ctxHeaderToggler = useContext(HeaderTogglerTheme)


const hamburgerHandler = ()=> {
    ctxHeaderToggler.menuToglerHandler()
}
 
useEffect(() => {
  
    const handleScroll = event => {
        window.scrollY > 50 ? setScrollTop(true) : setScrollTop(false);

        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        console.log(scrolled,scrollPx,winHeightPx)
        if(scrollPx == 0){
            setScrollPercent(0)
        }else {
            setScrollPercent(scrolled)

        }

    };
    
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const loaderHandler =()=>{

    // setLoader(true)
    
    // setTimeout(()=>{
    //     setLoader(false)
    // },1000)
  }

    
    return (
            <>
             {/* <div className={`loader` + (loader ? " active" : " ")}></div> */}
            <header className={`header` + (ScrollTop ? " active" : " ")}>
                <Link to="/" className="header_logo">
                    <img src={logo} alt=""/>
                </Link>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={loaderHandler}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" onClick={loaderHandler}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Prices</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Trainers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="hamburger-icon" id="icon" onClick={hamburgerHandler}>
                    <div className={`icon-1` + (ctxHeaderToggler.menuToggler ? " a" : "")} id="a"></div>
                    <div className={`icon-2` + (ctxHeaderToggler.menuToggler ? " c" : "")} id="b"></div>
                    <div className={`icon-3` + (ctxHeaderToggler.menuToggler ? " b" : "")} id="c"></div>
                    <div className="clear"></div>
                </div>
                <div className='scrollIndicator' style={{width:scrollPercent}}> </div>
            </header>

            <div className={`nav`+ (ctxHeaderToggler.menuToggler ? " nav-active" : "") + (ScrollTop ? " scrollTop" : " ")}>
                <div className="nav__content">
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