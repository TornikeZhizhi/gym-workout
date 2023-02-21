import React from 'react';
import "./CommonBoxWrappers.scss"


const CommonBoxWrappers = (props) => {
    return (
        <div className='common_box_wrapper'>
            {props.children}
        </div>
    );
};

export default CommonBoxWrappers;