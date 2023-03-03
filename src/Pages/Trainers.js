import React from 'react';
import CommonHeaderBackground from '../CommonHelpers/CommonHeaderBackground/CommonHeaderBackground';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';


import trainerJennifer from "../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../assets/imgs/trainer_john.jpg";
import trainerLidia from "../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../assets/imgs/trainer_kane.jpg";
import trainerBg from "../assets/imgs/trainer_bg3.jpg";
const Trainers = () => {

    const dummyTrainer = [
        {name:"Jennifer Lenson",img:trainerJennifer},
        {name:"John Bridge",img:trainerJohn},
        {name:"Lidia Perry",img:trainerLidia},
        {name:"Kane Jeferson",img:trainerKane},
        {name:"John Bridge",img:trainerJohn},
        {name:"Jennifer Lenson",img:trainerJennifer},
        {name:"Kane Jeferson",img:trainerKane},
        {name:"Lidia Perry",img:trainerLidia},
    
    ]

    return (
        <>
        <CommonHeaderBackground title="OUR TRAINERS"
         text="MEET OUR INSTRUCTORS"
         img={trainerBg}/>
        <TrainersComponent dummyTrainer={dummyTrainer} />
        </>
    );
};

export default Trainers;