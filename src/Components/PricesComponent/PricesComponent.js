import React from 'react';
import CommonFluid from '../../CommonHelpers/CommonFluid/CommonFluid';
import CommonTitle from '../../CommonHelpers/CommonTitle/CommonTitle';
import "./PricesComponent.scss";


const priceData = [
    {title:"ADULT FORTNIGHTLY GYM MEMBERSHIP",
     list:["$10.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"15.99",
     weekly:"Per Week"
    },
    {title:"JUNIOR DEVELOPMENT MEMBERSHIP",
     list:["$14.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"12.99",
     weekly:"Weekly"
    },
    {title:"UNDER 18 - FORTNIGHTLY GYM MEMBERSHIP",
     list:["$14.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"14.99",
     weekly:"Monthly"
    },
    {title:"UPFRONT 3 MONTH GYM MEMBERSHIP",
     list:["$14.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"14.99",
     weekly:"Monthly"
    },
    {title:"UPFRONT 6 MONTH GYM MEMBERSHIP",
     list:["$14.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"14.99",
     weekly:"Monthly"
    },
    {title:"UPFRONT 12 MONTH GYM MEMBERSHIP",
     list:["$14.00 key tag","24/7 access to the gym.", "24/7 access to affiliate gyms across Tasmania", "Full use of our loyalty program.","Minimum 1 month term."],
     price:"14.99",
     weekly:"Monthly"
    },

]

const PricesComponent = () => {
    return (
        <CommonFluid>
            <CommonTitle title="Our Prices"/>
        <div className='prices_container'>
            
            {priceData.map((item,index)=>{

                return (
                 <div role="listitem" class="w-dyn-item">
                    <div class="package">
                        <h3 class="h3">{item.title} </h3>
                        <div class="hr black"></div>
                        <div class="package-items w-richtext">
                            <ul role="list">
                                {item.list.map(list=>
                                   <li>{list}</li> 
                                 )}
                            </ul>
                            </div>
                            <a  class="large-button w-inline-block w-clearfix">
                                <div class="price white">${item.price}</div>
                                <div class="duration white">{item.weekly}</div>
                            </a>
                        </div>
                    </div>

                )
            }) }
           
        </div>
        </CommonFluid>
    );
};

export default PricesComponent;