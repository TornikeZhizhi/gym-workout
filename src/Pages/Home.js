import React from 'react';
import MembershipComponent from '../Components/CommonComponents/MembershipComponent/MembershipComponent';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';
import TrainingProgramsComponent from '../Components/CommonComponents/TrainingProgramsComponent/TrainingProgramsComponent';
import HomeMain from '../Components/HomeComponents.js/HomeMain';





const Home = () => {



    const handleSetActive = (to)=> {
        console.log(to);
      }

    return (
        <>
         
        <HomeMain/>
        <TrainersComponent/>
        <MembershipComponent/>
         <TrainingProgramsComponent/>
        </>
    );
};

export default Home;