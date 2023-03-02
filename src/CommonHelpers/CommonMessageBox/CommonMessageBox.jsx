import React from 'react';
import "./CommonMessageBox.scss"
const CommonMessageBox = ({image,text}) => {
    return (

        <div className='message_box' style={{backgroundImage: `url(${image})`}}>
            <h4>{text}</h4>
        </div>
    );
};

export default CommonMessageBox;