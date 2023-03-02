import React from 'react';
import CommonMessageBox from '../CommonHelpers/CommonMessageBox/CommonMessageBox';
import MembershipComponent from '../Components/CommonComponents/MembershipComponent/MembershipComponent';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';
import TrainingProgramsComponent from '../Components/CommonComponents/TrainingProgramsComponent/TrainingProgramsComponent';
import HomeMain from '../Components/HomeComponents.js/HomeMain';

import message_img1 from "../assets/imgs/message1.jpg";
import message_img2 from "../assets/imgs/message2.jpg";
import StrengthTrainingComponent from '../Components/CommonComponents/StrengthTrainingComponent/StrengthTrainingComponent';



const Home = () => {



    const handleSetActive = (to)=> {
        console.log(to);
      }

    return (
        <>
         
        <HomeMain/>
        <TrainersComponent/>
        <CommonMessageBox image={message_img1} text={"Become the best version of yourself"}/>
        <MembershipComponent/>
         <TrainingProgramsComponent/>
        <CommonMessageBox image={message_img2} text={"Overcome your insecurities"}/>
        <StrengthTrainingComponent/>
        </>
    );
};

export default Home;