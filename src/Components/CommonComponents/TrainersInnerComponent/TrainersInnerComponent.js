import React, { useContext, useEffect, useState } from 'react';
import "./TrainersInnerComponent.scss";
import { useParams } from "react-router-dom";
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';
import ReactStars from "react-rating-stars-component";

import trainerJennifer from "../../../assets/imgs/trainer_jennifer.jpg";
import trainerJohn from "../../../assets/imgs/trainer_john.jpg";
import trainerLidia from "../../../assets/imgs/trainer_lidia.jpg";
import trainerKane from "../../../assets/imgs/trainer_kane.jpg";
import Modal from '../../../CommonHelpers/Modal/Modal';
import { ModalTheme } from '../../../Contexts/ModalContext';

const dummyTrainer = [
    {position:"Powerbuilding Trainer",name:"Jennifer Lenson",img:trainerJennifer,rating:4, phrase:"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle"},
    {position:"Strength Trainer",name:"John Bridge",img:trainerJohn,rating:3.5, phrase:"Fitness is not about being better than someone else, it's about being better than you used to be."},
    {position:"Yoga Trainer",name:"Lidia Perry",img:trainerLidia,rating:3, phrase:"Champions aren't made in the gyms. Champions are made from something they have deep inside them"},
    {position:"Personal Trainer",name:"Kane Jeferson",img:trainerKane,rating:5, phrase:"The pain you feel today will be the strength you feel tomorrow."}

]
const TrainersInnerComponent = () => {

    const [innerData, setInnerData] = useState([])

    const ctxModal = useContext(ModalTheme)

    const params = useParams()
    useEffect(()=>{
       dummyTrainer.map((item,index)=>{
           if(item.name == params.id){
             setInnerData(item)
           }
        })
    },[])

    return (

        <>
            <CommonFluid headerPadding={"headerPadding min-height"}>
                <div className='trainners_inner_container'>
                    <div className='trainers_inner_img'>
                        <img src={innerData.img} alt=''/>
                    </div>
                    <div className='trainers_inner_info_body'>
                        <h4>{innerData.name}</h4>
                        <span className='position'>{innerData.position}</span>

                        <p className='phrase'>{innerData.phrase} <span></span></p>
                        {innerData.rating && 
                            <ReactStars
                            count={5}
                            value={innerData.rating}
                            size={44}
                            activeColor="#ffd700"
                            />
                        }
                        <div className='button_wrapper' onClick={(e)=>{
                            e.stopPropagation()
                            ctxModal.menuToglerHandler(true)
                        }}>
                            <button>Book A Visit</button>
                        </div>
                    </div>
                </div>
            </CommonFluid>
          {ctxModal.modalToggler && <Modal/>}   
        </>
    );
};

export default TrainersInnerComponent;