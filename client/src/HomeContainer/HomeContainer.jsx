import React from 'react';
import Home from './Home';
import About from './AboutContainer/About';
import Product from './ProductContainer/Product';
import Opportunity from './Opportunity/Opportunity';
import Footer from '../FooterContainer/Footer'


const HomeContainer = ()=>{

    return(
        <div>
            <Home/>
            <About/>
            <Product/>
            <Opportunity/>
            <Footer/>
        </div>
    )

}

export default HomeContainer;