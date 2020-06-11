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


createPost = async(formData)=>{
    try {
        formData.append('featured_image', this.state.featured_image);
        const newPost = await  fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: formData
    })
    let parsedResponse = await newPost.json();
    console.log(parsedResponse, "NewPOST");
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