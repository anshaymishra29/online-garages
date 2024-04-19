package com.garageservice.og.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer_tbl")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name", nullable=false)
	private String customerName;
	
	@Column(name = "email", nullable=false, unique=true)
	private String email;
	
	@Column(name = "password" , nullable=false)
	private String password;
	
	@Column(name = "contact", length=10, nullable=false)
	private Long contact;

	public Customer(Long id, String customerName, String email, String password, Long contact) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.email = email;
		this.password = password;
		this.contact = contact;
	}

	public Customer(String customerName, String email, String password, Long contact) {
		super();
		this.customerName = customerName;
		this.email = email;
		this.password = password;
		this.contact = contact;
	}

	public Customer() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}
	
	
}
