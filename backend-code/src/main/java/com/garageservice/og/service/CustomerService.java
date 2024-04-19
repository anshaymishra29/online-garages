package com.garageservice.og.service;

import com.garageservice.og.entity.Customer;

public interface CustomerService {

	boolean registerUser(Customer customer);
	
	Customer customerAuthentication(String email, String password);
}
