import React from 'react';
import CommonBoxWrappers from '../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';
import CommonFluid from '../../CommonHelpers/CommonFluid/CommonFluid';
import CommonTitle from '../../CommonHelpers/CommonTitle/CommonTitle';

import "./Contact.scss";
const ContactComponent = () => {
    return (

       <CommonBoxWrappers>
            <div className='contact'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11903.979220714507!2d44.79383667700196!3d41.763769807102435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d9cb4bf0369%3A0x1be21b8eac77bcb6!2zbS9zICJHcm1hZ2VsZSI!5e0!3m2!1sen!2sge!4v1526129978317" frameborder="0"  allowfullscreen></iframe>
                </div>

                <div className='form_wrapper'>
                    <h3>Contact Us</h3>
                    <form id="email-form" name="email-form" data-name="Email Form">
                        <input type="text" className="form w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your Name" id="name" required="" />
                        <input type="email" className="form w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter your Email" id="name-3" required="" />
                        <input type="text" className="form text-area w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter Your Age" id="name-2" required=""/>
                        <input type="submit" value="Send" data-wait="Please wait..." className="submit-button w-button"/>
                    </form>
                </div>
            </div>
       </CommonBoxWrappers>
    );
};

export default ContactComponent;