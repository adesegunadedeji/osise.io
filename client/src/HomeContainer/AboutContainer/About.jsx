import React from 'react';
import './About.css';



 const Home = ()=> {

    return(
        <div className="about-container">
            <strong>Discover where you'll love to live</strong>
            <p className="about-title">Osise is <span className="about-intro">an online Real Estate marketplace</span></p>
            <p className="about-text"> Osise facilitates buyers and renters to find homes and neighborhoods across Africa through recommendations. 
                <br/>
            with more neighborhood insights than our competitors, we've captured the color and diversity of communities.
            </p>
            <button className="about-button">Learn More</button>
        </div>
    )
}
export default Home;