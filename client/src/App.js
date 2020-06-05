import React from 'react';
import './App.css';
import Product from './HomeContainer/ProductContainer/Product'
import About from './HomeContainer/AboutContainer/About';
//import EmployeeContainer from './EmployeeContainer/EmployeeContainer';
import Home from './HomeContainer/Home';
import Opportunity from './HomeContainer/Opportunity/Opportunity';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Product/>
     <Opportunity/>
     {/* <EmployeeContainer/> */}
    </div>
  );
}

export default App;
