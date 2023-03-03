import React from 'react';
import CommonHeaderBackground from '../CommonHelpers/CommonHeaderBackground/CommonHeaderBackground';
import PricesComponent from '../Components/PricesComponent/PricesComponent';
import pricesBg from "../assets/imgs/prices_bg.jpg";
const Prices = () => {
    return (
        <>
            <CommonHeaderBackground title="Gym Membership Packages"
                text="Low Prices and Hight Results"
                img={pricesBg}
                />
            <PricesComponent/>
        </>
    );
};

export default Prices;