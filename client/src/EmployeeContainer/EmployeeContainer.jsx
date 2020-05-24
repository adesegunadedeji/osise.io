import React, { Component } from 'react';
import EmployeeList from './EmployeesList/EmployeesList'
import NewEmployee from './NewEmployee/NewEmployee';

const url = 'http://localhost:8080/employees';
export default class EmployeeContainer extends Component{
    constructor(){
        super();
        this.state={
            employees: []
        }
    }
        componentDidMount(){
        console.log("Component is Mounting")
        this.getEmployees();
    };

    getEmployees =  async()=>{
        try { 
            // get Employees Using Axios
            const employees = await fetch(`${url}`);
            const fetchedData = await employees.json();
                this.setState({
            employees: fetchedData
        });
        } catch (error) {
            console.log(error);
        }
    }

    createEmployee = async(formData)=>{
        console.log(formData);
        try {
           const newEmployee = await fetch(`${url}`, {
               method: "POST",
               body: JSON.stringify(formData),
               headers:{
                   "Content-Type": "application/json"
               }
            });
            const fetchedData = await newEmployee.json();
            console.log(fetchedData.status.code)
            console.log(fetchedData);
            if(fetchedData.status.code === 201){
                this.setState({
                    employees: [...this.state.employees, fetchedData.data]
                })

            }
        }catch (error) {
            console.log(error);
        }
    }


    render(){
        return (
            <div>
                <h1> Here's the employee container</h1>
                <NewEmployee createEmployee={this.createEmployee}/>
                <EmployeeList employees={this.state.employees}/>
            </div>
        )
    }
}