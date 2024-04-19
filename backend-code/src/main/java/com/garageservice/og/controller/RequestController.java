package com.garageservice.og.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.garageservice.og.entity.Category;
import com.garageservice.og.entity.Customer;
import com.garageservice.og.entity.Garage;
import com.garageservice.og.service.CategoryService;
import com.garageservice.og.service.CustomerService;
import com.garageservice.og.service.GarageService;
import java.nio.file.Files;
import java.nio.file.Paths;


@RestController
public class RequestController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/")
	public List<Category> getallCategory(){
		
		return categoryService.getAllCategories();
	}

	
}
