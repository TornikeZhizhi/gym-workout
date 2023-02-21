import React from 'react';
import "./TrainingProgramsComponent.scss";
import CommonBoxWrappers from '../../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';
import CommonTitle from '../../../CommonHelpers/CommonTitle/CommonTitle';
import programImg1 from "../../../assets/imgs/download.png";
import programImg2 from "../../../assets/imgs/download2.png";
import programImg3 from "../../../assets/imgs/download3.png";
import CommonFluid from '../../../CommonHelpers/CommonFluid/CommonFluid';

const dumyProgramsData = [
    { title:"Power up",
      text:"Power up and become super strong with strength training. Pull tough ropes, lift weights and build strength in both your hands and legs.",
      img:programImg1
    },
    { title:"Be Flexible",
      text:"Bend and twist like a tiger with poses that increases your flexibility. A mix of stretches and yoga will keep your body young and free of stiff limbs.",
      img:programImg2
    },
    { title:"Super Body Toning",
      text:"Look fierce and wild with a body that’s toned from head to toe. Get all the right muscles in all the right places while hitting tough cardio exercises for extreme health.",
      img:programImg3
    },
]

const TrainingProgramsComponent = () => {
    return (
        <CommonFluid>
            <CommonTitle title={"Our Programs"}/>
                <CommonBoxWrappers>
                    {dumyProgramsData.map((item)=>
                        <div className='our_programs_box'>
                            <div className='op_img'>
                                <img src={item.img} alt=''/>
                            </div>
                            <div className='op_title'>
                                <h4>{item.title}</h4>
                            </div>
                            <div className='op_text'>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )}
                 
                </CommonBoxWrappers>
         </CommonFluid>
    );
};

export default TrainingProgramsComponent;