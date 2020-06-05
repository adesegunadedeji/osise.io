import React from 'react';
import './Product.css';

import Review from './Review.jpg';


const Project = ()=> {
    
    

    const resources = [
        {
        id: 1,
        image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/payroll-8-402746.png",
        alt: "Payroll.png"
    },
        { 
            id: 2,
        image: "https://cdn1.iconfinder.com/data/icons/ios-edge-line-7/25/Multiple-Documents-512.png",
        alt: "Review.png"
        }
    ].map((resources)=> {
        console.log(resources.image)
        return(
            <div key={resources.id}>
                <img src={resources.image} alt={resources.alt}/>
            </div>
        )});

    return (
        <div className="product-container">
            <p>Get the right tools and services
for your business and your team.</p>
<div className="productImg-container">
    {resources}
</div>
        </div>
    )

}
export default Project;