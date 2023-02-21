import React from 'react';
import "./TrainersComponent.scss";
import trainerJennifer from "../../../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../../../assets/imgs/trainer_john.jpg";
import trainerLidia from "../../../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../../../assets/imgs/trainer_kane.jpg";
import CommonTitle from '../../../CommonHelpers/CommonTitle/CommonTitle';
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';
import CommonBoxWrappers from '../../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';


const dummyTrainer = [

    {name:"Jennifer Lenson",img:trainerJennifer},
    {name:"John Bridge",img:trainerJohn},
    {name:"Lidia Perry",img:trainerLidia},
    {name:"Kane Jeferson",img:trainerKane}


]

const TrainersComponent = () => {
    return (
        <CommonFluid dataId={"trainer"}>
            <CommonTitle title={"Our Coaches"}/>
                <CommonBoxWrappers>
                    {dummyTrainer.map(item=>
                        <div className='trainers_comp_box' key={item.name}>
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
                </CommonBoxWrappers>
        </CommonFluid>
    );
};

export default TrainersComponent;