import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomeContainer from './HomeContainer/HomeContainer';
import NavbarExample from './HomeContainer/Navbar';
import ListingsContainer from './Listings/ListingsContainer';
import HomesList from './Listings/HomesList';
import Footer from '../src/FooterContainer/Footer';
function App() {
  return (
    <div className="App">
      <NavbarExample/>
      <Switch>
        <Route path = "/homes" component = {HomesList} />
        <Route path = "/listings" component = {ListingsContainer}/>
       <Route path= '/' component ={HomeContainer}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
