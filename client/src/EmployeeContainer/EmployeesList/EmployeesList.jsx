import React from 'react';
import EditEmployeeModal from '../EditEmployeeModal';

const EmployeesList = (props)=>{
    console.log(props)
        let employees = props.allEmployees.map((employee)=> {
            console.log(employee.id)
        return(
            <div key={employee.id}>
                <h4 style={{color: "red", listStyle: "none"}}>{employee.first_name}</h4>
                {/* <img style={{sborderRadius: "5px"}} src={employee.profile_image} alt="Emplyee Image"/> */}
                <EditEmployeeModal employee={employee}/>
                <button onClick={()=>{
                    props.deleteEmployee(employee.id)
                }} style={{backgroundColor: "red", borderRadius: "20px"}}>DELETE</button>
            </div>
        )
            })
    return (
        <div>
            <h3>List of Employees</h3>
            {employees}
        </div>
    )
}
export default  EmployeesList;