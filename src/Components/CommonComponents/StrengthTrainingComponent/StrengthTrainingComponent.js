import React from 'react';
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';
import "./StrengthTrainingComponent.scss";

import strengthImg from "../../../assets/imgs/str1.png";

const StrengthTrainingComponent = () => {
    return (
        <div className='str_container'>
            <div className='str_img'>
                <img src={strengthImg} alt="" />
            </div>
            <div className='str_info'>
                <span>Strength Training</span>
                <h4>Crush any strength program with our suite of strength equipment</h4>
                <ul>
                    <li>Fully fitted powerlifting and strongman section</li>
                    <li>Olympic lifting platforms, weights, and bars</li>
                    <li>Dumbells ranging 5lbs-250lbs</li>
                </ul>
            </div>

        </div>
    );
};

export default StrengthTrainingComponent;