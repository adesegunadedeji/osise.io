import React from 'react';
import About from './AboutContainer/About';
import Product from './ProductContainer/Product';
import Opportunity from './Opportunity/Opportunity';
const HomeContainer = ()=>{

    return(
        <div>
            <About/>
            <Product/>
            <Opportunity/>
        </div>
    )

}

export default HomeContainer;