import React from 'react';
import CommonFluid from '../../CommonHelpers/CommonFluid/CommonFluid';
import CommonTitle from '../../CommonHelpers/CommonTitle/CommonTitle';
import CommonBoxWrappers from '../../CommonHelpers/CommonBoxWrappers/CommonBoxWrappers';
import "./AboutusComponent.scss";


const AboutusComponent = () => {
    return (
            <CommonFluid headerPadding={"headerPadding"}>
                <CommonTitle title={"About Us"}/>

                <CommonBoxWrappers>

                <div className="about_text">

                    <p>
                    Battle Tested Fitness, has been Kissimmee's leading gym in boxing, fitness and strength training since 2014. We offer the best training facilities, professional staff, and a wide selection of fitness classes and equipment.

From boxing to yoga, weight lifting to HIIT, personal training, fitness and outdoor drills - we have everything you need to look and feel your best.
                    </p>

                    <p>
                      CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission to help people in Denver get fit, stay healthy, and live life on their terms without fitness being an obstacle.
                    </p>

                </div>
                </CommonBoxWrappers>
            </CommonFluid>
    );
};

export default AboutusComponent;