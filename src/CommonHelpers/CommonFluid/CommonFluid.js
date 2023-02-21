import React from 'react';
import "./CommonFluid.scss";
const CommonFluid = (props) => {
    return (
        <div className='common_fluid' id={props.dataId ? props.dataId : ""}>
            {props.children}
        </div>
    );
};

export default CommonFluid;