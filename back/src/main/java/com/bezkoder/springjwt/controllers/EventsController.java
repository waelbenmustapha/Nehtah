package com.bezkoder.springjwt.controllers;

import com.bezkoder.springjwt.models.Employee;
import com.bezkoder.springjwt.models.Events;
import com.bezkoder.springjwt.repository.EmployeeRepository;
import com.bezkoder.springjwt.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/events")
public class EventsController {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    EventsRepository eventsRepository;

    @PostMapping("/add/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity addOrder(@RequestBody Events events, @PathVariable("id") Long id) {
        if (events != null) {
            try {
             Employee employee =  employeeRepository.findById(id).get();
             events.setEmployee(employee);
             eventsRepository.save(events);
                return new ResponseEntity("order added successfully", HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity("Something went wrong" + e, HttpStatus.INTERNAL_SERVER_ERROR);

            }

        } else {
            return new ResponseEntity("order can't be null", HttpStatus.BAD_REQUEST);

        }

    }

}
