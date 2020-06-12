import React, { Component } from 'react';
import EmployeeList from './EmployeesList/EmployeesList'
import NewEmployee from './NewEmployee/NewEmployee';
import Home from '../HomeContainer/Home';
import Footer from '../FooterContainer/Footer';
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

    // componentDidUpdate(){
    //     console.log("Component is Updating")
    //     this.getEmployees();
    // };

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
            // console.log(formData);
            console.log(formData, "FORMDATA");
            const newEmployee = await fetch(`${url}`, {
               method: "POST",
               body: JSON.stringify(formData),
               headers:{
                   "Content-Type": "application/json",
                   "accept": "application/json"
               }
            })
            console.log(newEmployee);
            let parsedResponse = await newEmployee.json();
            console.log(parsedResponse)
                this.setState({
                    employees: [...this.state.employees, parsedResponse]
                })
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
        updateEmployee = async(id,formData)=>{
             try {
               const updatedEmployee =  await fetch(`${url}/${id}`,{
                method: "PUT",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json",
                }
               });
               const parsedResponse = await updatedEmployee.json();
               console.log(parsedResponse);
               this.setState({
                   employees: this.state.employees.map((employee)=>
                    employee.id === id ? parsedResponse: employee
                   )
               })
            } catch (error) {
        console.log(error)
    }
}
    render(){
        return (
            <div>
                <Home/>
                 <NewEmployee createEmployee={this.createEmployee}/>
                <EmployeeList allEmployees={this.state.employees} deleteEmployee={this.deleteEmployee} updateEmployee={this.updateEmployee}/>
                <Footer/>
            </div>
        )
    }
}