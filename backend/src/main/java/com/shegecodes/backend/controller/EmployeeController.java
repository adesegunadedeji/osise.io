package com.shegecodes.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shegecodes.backend.repository.EmployeeRepository;
import com.shegecodes.backend.model.Employee;
import com.shegecodes.backend.exception.ResourceNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //Get Employee
    @GetMapping("employees")
    public List <Employee> getAllEmployees(){
        return this.employeeRepository.findAll();
    }   

    //Get Employee By ID
    @GetMapping(".employees/{id}")
    public ResponseEntity <Employee> getEmployeeById(@PathVariable(value ="id")Long employeeId)
            throws ResourceNotFoundException{
        Employee employee =  employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee not found with this Id :: " + employeeId));
        return ResponseEntity.ok().body(employee);
    }
    //Save Employee
    @PostMapping("employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return this.employeeRepository.save(entity);

    }
    //Update Employee

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value ="id")Long employeeId,
        @Valid @RequestBody Employee employeeDetails){
            Employee employee =  employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee not found with this Id :: " + employeeId));
       

            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setJobTitle(employeeDetails.getJobTitle());
            employee.setDepartment(employeeDetails.getDepartment());

            return ResponseEntity.ok(this.employeeRepository.save(employee));
        }
    //Delete Employee
    @DeleteMapping("employees/{id}")
    public Map <String, Boolean> deleteEmployee(@PathVariable(value ="id")Long employeeId) throws ResourceNotFoundException{
        Employee employee =  employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee not found with this Id :: " + employeeId));

        this.employeeRepository.delete(employee);

        Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
    }
    
}