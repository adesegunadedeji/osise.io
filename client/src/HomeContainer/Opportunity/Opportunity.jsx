import React from 'react';
import './Opportunity.css';

const Opportunity = ()=> {

    const resources = [
        {
            id: 1,
            title: "Onboard Your Team",
            content: "Send great offer letters and have new employees set up their own Osise accounts. Plus, sign and store the new-hire paperwork you need right in Osise to stay organized. "
        },
        {
            id: 2,
            title: "Pay Your Team",
            content: "We made payroll easy. With just a few clicks, we calculate and file your payroll taxes. From there, everything syncs automatically — time tracking, new hires, benefits plans, and more."
        },
        {
            id: 3,
            title: "Help Your Team make the most of their careers",
            content: " Supporting your team goes beyond payday. With Osise, you can give employees tools and resources to build a solid career."
        }
    ].map((resources)=> {
        console.log(resources.title);
        return (
            <div key={resources.id} className="test">
                <strong>{resources.title}</strong>
                <p className="list-text">{resources.content}</p>
            </div>
        )

    })
    return (
        <div className="opportunity-container">
            <h2>opportunities</h2>
    {resources}
        </div>
    )

}

export default Opportunity;