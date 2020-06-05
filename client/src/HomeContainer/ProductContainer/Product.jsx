import React from 'react';
import './Product.css';
const Project = ()=> {
    
    

    const resources = [
        {
        id: 1,
        image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/payroll-8-402746.png",
        alt: "Payroll.png",
        title: "Full-service payroll"
    },
        { 
        id: 2,
        image: "https://cdn1.iconfinder.com/data/icons/ios-edge-line-7/25/Multiple-Documents-512.png",
        alt: "Review.png",
        title: "Employee appraisal tools"
        }, {
            id: 3,
            image: "https://image.flaticon.com/icons/svg/1924/1924451.svg",
            alt: "Onboarding.svg",
            title: "Employee Onboarding"
        }
    ].map((resources)=> {
        console.log(resources.image)
        return(
            <div key={resources.id} className="image_container">
                <img src={resources.image} alt={resources.alt}/>
        <h6>{resources.title}</h6>
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