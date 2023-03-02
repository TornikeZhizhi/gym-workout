import React from 'react';
import CommonHeaderBackground from '../CommonHelpers/CommonHeaderBackground/CommonHeaderBackground';
import TrainersComponent from '../Components/CommonComponents/TrainersComponent/TrainersComponent';


import trainerJennifer from "../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../assets/imgs/trainer_john.jpg";
import trainerLidia from "../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../assets/imgs/trainer_kane.jpg";

const Trainers = () => {

    const dummyTrainer = [
        {name:"Jennifer Lenson",img:trainerJennifer},
        {name:"John Bridge",img:trainerJohn},
        {name:"Lidia Perry",img:trainerLidia},
        {name:"Kane Jeferson",img:trainerKane},
        {name:"Jennifer Lenson",img:trainerJennifer},
        {name:"John Bridge",img:trainerJohn},
        {name:"Lidia Perry",img:trainerLidia},
        {name:"Kane Jeferson",img:trainerKane}
    
    ]

    return (
        <>
        <CommonHeaderBackground/>
        <TrainersComponent dummyTrainer={dummyTrainer} />
        </>
    );
};

export default Trainers;