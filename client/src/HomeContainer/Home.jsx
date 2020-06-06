import React from 'react';
import './Home.css'
import osise from '../Images/osise.png'
import Navbar from './Navbar';
const Home = ()=> {

    return(
        <div className="main-container">
            <img className= "osise-logo" src={osise} alt= "Osise Logo"/>
            <Navbar/>
        </div>
    )
}

export default Home;