package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Employee;
import com.bezkoder.springjwt.models.Orders;
import com.bezkoder.springjwt.repository.EmployeeRepository;
import com.bezkoder.springjwt.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/add/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity addOrder(@RequestBody Orders orders, @PathVariable("id") Long id) {
        if (orders != null) {
            try {
             Employee employee =  employeeRepository.findById(id).get();
             orders.setEmployee(employee);
             orderRepository.save(orders);
                return new ResponseEntity("order added successfully", HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

            }

        } else {
            return new ResponseEntity("order can't be null", HttpStatus.BAD_REQUEST);

        }

    }

}
