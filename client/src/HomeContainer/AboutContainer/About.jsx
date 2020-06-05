import React from 'react';
import './About.css';



 const Home = ()=> {

    return(
        <div className="about-container">
            <strong>Welcome to the people platform</strong>
            <p className="about-title">Osise is an <span className="about-intro">exclusive SaaS</span> for small businesses and enterprises</p>
            <p className="about-text">Think of osise as a hub that makes it easy for small businesses to onboard, pay and review its hardworking team.
                <br/>
                We offer very customizable and user-friendly enterpize grade solutions that aims to helps businesses manage their Human Capital, and also get and give feedback.
            </p>
            <button className="about-button">Get Started</button>
        </div>
    )
}
export default Home;