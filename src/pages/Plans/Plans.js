import React from 'react'
import './Plans.css'

function Plans() {
const pricingData = [
    {
        title: "Regular Member",
        price: "$0",
        duration: "/Month",
        color: "#fff",
        features:[
            'unlimited access to the course',
            'Customer support',
            'Personal Monitor',
            'Standard options',
            '5 classes per week'
        ]
    },
    {
        title: "Premium Member",
        price: "$100",
        duration: "/Month",
        color: "red",
        features:[
            'unlimited access to the course',
            'Customer support',
            'Personal Monitor',
            'Standard options',
            '5 classes per week'
        ]
    },
    {
        title: "Standard Member",
        price: "$10",
        duration: "/Month",
        color: "#fff",
        features:[
            'unlimited access to the course',
            'Customer support',
            'Personal Monitor',
            'Standard options',
            '5 classes per week'
        ]
    },
]

  return (
    <div className='container'>
            <div className="pricing_top">
                <h2 className='section_title'>Premium Pricing Plan</h2>
                <p>Unlock elite tech service with our premium pricing plan and sour ahead of the competition</p>
            </div>
            <div className="pricing-wrapper">
                {pricingData.map((pricingitem,index)=>(
                     <div className="pricing-item" key={index}>
                     <div className="pricing_card-top">
                         <h2 className="section_title">{pricingitem.title}</h2>
                         <h2 className="pricing_section_title">
                             {pricingitem.price} <span>{pricingitem.duration}</span>
                         </h2>
                     </div>
                     <div className="services">
                         <ul>
                             {pricingitem.features.map((feature,index)=>(
                                <li key={index}>{feature}</li>
                             ))

                             }
                         </ul>
                         <button className='register-btn'>Join</button>
                     </div>
                 </div>
                ))}
                   
                
            </div>



    </div>
  )
}

export default Plans