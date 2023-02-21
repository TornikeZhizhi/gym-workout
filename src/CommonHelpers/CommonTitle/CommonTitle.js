import React from 'react';
import  "./CommonTitle.scss";


const CommonTitle = ({title}) => {
    return (
        <div className='common_title'>
             <h3>{title}</h3>
         </div>
    );
};

export default CommonTitle;