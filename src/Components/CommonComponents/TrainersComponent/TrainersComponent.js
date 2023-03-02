import React from 'react';
import "./TrainersComponent.scss";

import CommonTitle from '../../../CommonHelpers/CommonTitle/CommonTitle';
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';
import CommonBoxWrappers from '../../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';



const TrainersComponent = ({dummyTrainer}) => {
    return (
        <CommonFluid dataId={"trainer"}>
            <CommonTitle title={"Our Coaches"}/>
                <CommonBoxWrappers>
                    {dummyTrainer.map(item=>
                        <div className='trainers_comp_box' key={item.name}>
                            <div className='trainers_comp_img'>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <div className='trainers_comp_title'>
                                <h3>
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    )}
                </CommonBoxWrappers>
        </CommonFluid>
    );
};

export default TrainersComponent;