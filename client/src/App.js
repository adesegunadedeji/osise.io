import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import EmployeeContainer from './EmployeeContainer/EmployeeContainer';
import ReviewContainer from './EmployeeContainer/ReviewContainer';
import HomeContainer from './HomeContainer/HomeContainer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employees" component = {EmployeeContainer}/>
        <Route path="/reviews" component = {ReviewContainer}/>
        <Route path= '/' component ={HomeContainer}/>
      </Switch>
    </div>
  );
}

export default App;
