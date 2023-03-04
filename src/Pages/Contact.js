import React from 'react';
import CommonHeaderBackground from '../CommonHelpers/CommonHeaderBackground/CommonHeaderBackground';
import ContactComponent from '../Components/Contact/Contact';
import contactBg from "../assets/imgs/contact_bg.jpg";
const Contact = () => {
    return (

        <>
        <CommonHeaderBackground title="Contact Us"
         img={contactBg}/>
        <ContactComponent/>
         </>
    );
};

export default Contact;