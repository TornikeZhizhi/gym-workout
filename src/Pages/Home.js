import React from 'react';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';
import HomeMain from '../Components/HomeComponents.js/HomeMain';





const Home = () => {



    const handleSetActive = (to)=> {
        console.log(to);
      }

    return (
        <>
         
        <HomeMain/>
        <TrainersComponent/>
      
       
        </>
    );
};

export default Home;