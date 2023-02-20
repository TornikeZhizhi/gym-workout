import React from 'react';
import "./TrainersComponent.scss";
import trainerJennifer from "../../../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../../../assets/imgs/trainer_john.jpg";
import trainerLidia from "../../../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../../../assets/imgs/trainer_kane.jpg";


const dummyTrainer = [

    {name:"Jennifer Lenson",img:trainerJennifer},
    {name:"John Bridge",img:trainerJohn},
    {name:"Lidia Perry",img:trainerLidia},
    {name:"Kane Jeferson",img:trainerKane},
]

const TrainersComponent = () => {
    return (
        <div className='trainers_comp_container'>
            <div className='trainers_comp_title'>
                <h2>Our Coaches</h2>
            </div>
            <div className='trainers_comp_wrapper'>
                {dummyTrainer.map(item=>
                    <div className='trainers_comp_box'>
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
            </div>
        </div>
    );
};

export default TrainersComponent;