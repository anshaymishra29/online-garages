package com.garageservice.og.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garageservice.og.entity.Customer;
import com.garageservice.og.repository.CustomerRepository;
import com.garageservice.og.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public boolean registerUser(Customer customer) {
		Customer cus = customerRepository.save(customer);
		if(cus != null) {
			return true;
		}
		return false;
	}

	@Override
	public Customer customerAuthentication(String email, String password) {
	   Optional<Customer> customer	= customerRepository.findByEmail(email);
	  
	   if(customer.isPresent()) {
		   Customer cus = customer.get();
//		   cus.getPassword().equals(password);
		   System.out.println(cus.getPassword());
		   boolean isPasswordCorrect = BCrypt.checkpw(password, cus.getPassword());
		   if(isPasswordCorrect) {
			   return cus;
		   }
		   return null;
	   }
		return null;
	}

}
