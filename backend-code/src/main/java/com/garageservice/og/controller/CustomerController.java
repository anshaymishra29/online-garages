package com.garageservice.og.controller;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.garageservice.og.entity.Customer;
import com.garageservice.og.service.CustomerService;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/api/userRegistrationForm")
    public ResponseEntity<String> userRegistration(@RequestBody Customer customer) {
        String pass = customer.getPassword();
        String hashedPass = BCrypt.hashpw(pass, BCrypt.gensalt());
        customer.setPassword(hashedPass);
        boolean status = customerService.registerUser(customer);
        if (status) {
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable to register user");
        }
    }

    @PostMapping("/api/userAuthenticationForm")
    public ResponseEntity<Customer> userAuthentication(@RequestParam("email") String email, @RequestParam("password") String password) {
        Customer authenticatedCustomer = customerService.customerAuthentication(email, password);
        if (authenticatedCustomer != null) {
            return ResponseEntity.ok(authenticatedCustomer);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}