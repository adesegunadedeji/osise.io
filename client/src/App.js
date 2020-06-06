import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import EmployeeContainer from './EmployeeContainer/EmployeeContainer';
//import EmployeeContainer from './EmployeeContainer/EmployeeContainer';
import HomeContainer from './HomeContainer/HomeContainer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/employees" component = {EmployeeContainer}/>
        <Route path= '/' component ={HomeContainer}/>
      </Switch>
    </div>
  );
}

export default App;
