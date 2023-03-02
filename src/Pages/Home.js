import React from 'react';
import CommonMessageBox from '../CommonHelpers/CommonMessageBox/CommonMessageBox';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';
import TrainingProgramsComponent from '../Components/CommonComponents/TrainingProgramsComponent/TrainingProgramsComponent';
import HomeMain from '../Components/HomeComponents.js/HomeMain';

import message_img1 from "../assets/imgs/message1.jpg";
import message_img2 from "../assets/imgs/message2.jpg";
import StrengthTrainingComponent from '../Components/CommonComponents/StrengthTrainingComponent/StrengthTrainingComponent';

import trainerJennifer from "../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../assets/imgs/trainer_john.jpg";
import trainerLidia from "../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../assets/imgs/trainer_kane.jpg";


const Home = () => {



    const dummyTrainer = [
        {name:"Jennifer Lenson",img:trainerJennifer},
        {name:"John Bridge",img:trainerJohn},
        {name:"Lidia Perry",img:trainerLidia},
        {name:"Kane Jeferson",img:trainerKane}
    
    ]
    

    return (
        <>
         
        <HomeMain/>
        <TrainersComponent dummyTrainer={dummyTrainer}/>
        <CommonMessageBox image={message_img1} text={"Become the best version of yourself"}/>
         <TrainingProgramsComponent/>
        <CommonMessageBox image={message_img2} text={"Overcome your insecurities"}/>
        <StrengthTrainingComponent/>
        </>
    );
};

export default Home;