package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Employee;
import com.bezkoder.springjwt.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/all")
    public ResponseEntity getAllEmployees() {
        try {
            List<Employee> employeeList = employeeRepository.findAll();
            return new ResponseEntity(employeeList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }


    @PostMapping("/add")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity addEmployee(@RequestBody Employee employee) {
        if (employee != null) {
            try {
                employeeRepository.save(employee);
                return new ResponseEntity("Employee added successfully", HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

            }

        } else {
            return new ResponseEntity("employee can't be null", HttpStatus.BAD_REQUEST);

        }

    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity DeleteEmployee(@PathVariable("id") Long id) {
        if (id != null) {
            try {
                employeeRepository.deleteById(id);
                return new ResponseEntity("Employee deleted successfully", HttpStatus.OK);

            } catch (Exception e) {
                return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

            }
        } else {
            return new ResponseEntity("id can't be null", HttpStatus.BAD_REQUEST);

        }

    }

    @PutMapping("/edit/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity EditEmployee(@PathVariable("id") Long id,@RequestBody Employee reqemployee) {
        if (id != null) {
            try {
               Employee employee = employeeRepository.findById(id).get();
               employee.setFirstname(reqemployee.getFirstname());
               employee.setLastname(reqemployee.getLastname());
               employee.setImage(reqemployee.getImage());
               employee.setPhonenumber(reqemployee.getPhonenumber());
               employeeRepository.save(employee);
                return new ResponseEntity("Employee Edited successfully", HttpStatus.OK);

            } catch (Exception e) {
                return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

            }
        } else {
            return new ResponseEntity("id can't be null", HttpStatus.BAD_REQUEST);

        }

    }
}
