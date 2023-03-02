import React from 'react';
import TrainersComponent from '../../Components/CommonComponents/TrainersComponent/TrainersComponent';
import TrainingProgramsComponent from '../../Components/CommonComponents/TrainingProgramsComponent/TrainingProgramsComponent';
import CommonFluid from '../CommonFluid/CommonFluid';
import "./CommonHeaderBackground.scss";

const CommonHeaderBackground = () => {
    return (
        <>
        <div className='bg_fluid'>
            <div className='bg_container'>

                <div className='bg_titl_box'>
                    <h3>OUR TRAINERS</h3>
                    <span>MEET OUR INSTRUCTORS</span>
                </div>

            </div>
        </div>
        <TrainersComponent/>
        </>
    );
};

export default CommonHeaderBackground;