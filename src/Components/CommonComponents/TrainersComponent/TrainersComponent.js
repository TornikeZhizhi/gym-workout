import React from 'react';
import "./TrainersComponent.scss";

import CommonTitle from '../../../CommonHelpers/CommonTitle/CommonTitle';
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';
import CommonBoxWrappers from '../../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';
import { NavLink } from 'react-router-dom';



const TrainersComponent = ({dummyTrainer}) => {
    return (
        <CommonFluid dataId={"trainer"}>
            <CommonTitle title={"Our Coaches"}/>
                <CommonBoxWrappers>
                    {dummyTrainer.map(item=>
                        <div className='trainers_comp_box' key={item.name}>
                            <NavLink to={`/trainers/${item.name}`}>
                                <div className='trainers_comp_img'>
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </NavLink>
                            <div className='trainers_comp_title'>
                                <NavLink to={`/trainers/${item.name}`}>
                                    <h3>
                                        {item.name}
                                    </h3>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </CommonBoxWrappers>
        </CommonFluid>
    );
};

export default TrainersComponent;