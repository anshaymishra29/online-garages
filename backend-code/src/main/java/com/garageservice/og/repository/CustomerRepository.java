package com.garageservice.og.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.garageservice.og.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

	Optional<Customer> findByEmail(String email);
}
