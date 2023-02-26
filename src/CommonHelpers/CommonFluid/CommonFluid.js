import React from 'react';
import "./CommonFluid.scss";
const CommonFluid = ({children, headerPadding, dataId}) => {
    return (
        <div className={`common_fluid ` + (headerPadding ? headerPadding : "") }  id={dataId ? dataId : ""}>
            {children}
        </div>
    );
};

export default CommonFluid;