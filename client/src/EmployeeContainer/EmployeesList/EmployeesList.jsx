import React from 'react';
import './EmployeeList.css';
import EditEmployeeModal from '../EditEmployeeModal';

const EmployeesList = (props)=>{
    console.log(props);
        let employees = props.allEmployees.map((employee)=> {
        return(
            <div key={employee.id} className="name-container">
                <h4>{employee.first_name} {employee.last_name}</h4>
                <img className="employee-image" src={employee.profile_image} alt={employee.first_name}/>
                <div className="inline_button"></div>
                <EditEmployeeModal employee={employee} updateEmployee={props.updateEmployee} className="editEmployeeButton"/>
                <button className="second-button" onClick={()=>{
                    props.deleteEmployee(employee.id)
                }}>DELETE</button>
            </div>
        )
            })
    return (
        <div className="employee-container">
            <h2 className="employee-header">List of Employees</h2>
            <div className="flex-employee">
            {employees}
            </div>
        </div>
    )
}
export default  EmployeesList;