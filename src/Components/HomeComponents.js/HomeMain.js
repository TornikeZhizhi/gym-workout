import React from 'react';
import "./HomeMain.scss";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const HomeMain = () => {
    return (
        <div className='home_main'>
            <div className='main_banner'>

                <div className="content">
                    <h2>Change Your Life !!!</h2>
                    <h2>Change Your Life !!!</h2>
	            </div>
                <div className='banner_bottom_text'>
                    <span>always be</span>
                    <div className="message">
                        <div className="word1">Healthy</div>
                        <div className="word2">Happy</div>
                        <div className="word3">Strong</div>
                    </div>
                </div>
                <Link className='scroll_link' to="trainer" spy={true} smooth={true} offset={20} duration={500}>
                    <div className="scroll-container">
                        <div className="scroller"></div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default HomeMain;