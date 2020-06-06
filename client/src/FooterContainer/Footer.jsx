import React from 'react';
import './Footer.css';




const Footer = ()=> {
    const resources = [
        {
            id:1,
            title: "Why Osise", 
            bullet: "Employee Communication",
            bullet2: "Employee Time Clock",
            bullet3:"Checklist & Forms",
            bullet4: "Pricing"

        }, 
            {
                id:2,
                title: "About",
                bullet: "Careers",
                bullet2: "Contact",
                bullet3: "Affiliate program",
                bullet4: "Privacy"
    }, {
        id:3,
        title: "Contact us",
        bullet: "Talk to sales",
        bullet2: "Talk to support",
        bullet3: "Expert HR",
        bullet4: "Case Studies"
    }
].map((resources)=> {
        return(
            <div key={resources.key}>
                <strong className="footer-strong">{resources.title}</strong>
                <ul className="footer-list">
                     <li>{resources.bullet}</li>
                     <li>{resources.bullet2}</li>
                     <li>{resources.bullet3}</li>
                     <li>{resources.bullet4}</li>
                </ul>
            </div>
        )})
    return (
        <div className="footer-container">
            {resources}
        </div>
    )
}

export default Footer;