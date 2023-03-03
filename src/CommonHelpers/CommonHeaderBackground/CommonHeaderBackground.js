import React from 'react';
import TrainersComponent from '../../Components/CommonComponents/TrainersComponent/TrainersComponent';
import TrainingProgramsComponent from '../../Components/CommonComponents/TrainingProgramsComponent/TrainingProgramsComponent';
import CommonFluid from '../CommonFluid/CommonFluid';
import "./CommonHeaderBackground.scss";

const CommonHeaderBackground = ({title,text,img}) => {
    return (
        <>
        <div className='bg_fluid'style={{backgroundImage: `url(${img})`}}>
            <div className='bg_container'>

                <div className='bg_titl_box'>
                    <h3>{title}</h3>
                    <span>{text}</span>
                </div>

            </div>
        </div>
        </>
    );
};

export default CommonHeaderBackground;