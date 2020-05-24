import React from 'react';

export default function EmployeesList(props){
    const employees = props.employees.map(employee => {
        return (
            <div>
                <ul key = {employee._id}>
                    <li>{employee.first_name}</li>
                    <li>{employee.last_name}</li>
                </ul>
            </div>
        )
    })

    return (
        <div>
            {employees}
        </div>
    )

}