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
        try {
           const newEmployee = await fetch(`${url}`, {
               method: "POST",
               body: JSON.stringify(formData),
               headers:{
                   "Content-Type": "application/json",
                   "accept": "application/json"
               }
            })
            let parsedResponse = await newEmployee.json();
            if(parsedResponse){
                this.setState({
                    employees: [...this.state.employees, parsedResponse.data]
                })
            }
    } catch (error) {
            console.log(error);
        }
    }

    deleteEmployee = async (id) =>{
        console.log(id, "Expecting ID of Deleted Employee");
        try{
                await fetch(`${url}/${id}`,{
                method: "DELETE",
            });
                this.setState({
                employees: this.state.employees.filter(employee=>  employee.id !==id 
                    // function(employee){
                //     if(employee.id === id){
                //         return false;
                //     }
                //     else{
                //         return true;
                //     }
                // }
                )
            })
        }
        catch(err){
            console.log(err)
        }
    }

    render(){
        return (
            <div>
                <h1> Here's the employee container</h1>
                <NewEmployee createEmployee={this.createEmployee}/>
                <EmployeeList allEmployees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
            </div>
        )
    }
}