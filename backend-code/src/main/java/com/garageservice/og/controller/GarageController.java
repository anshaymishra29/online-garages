package com.garageservice.og.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.garageservice.og.entity.Garage;
import com.garageservice.og.service.GarageService;

@RestController
public class GarageController {

	@Autowired
	private GarageService garageService;
	
	@GetMapping("/garages")
	public List<Garage> showUsers(){
		
		return garageService.getAllGarage();
	}
	
	
	@PostMapping("/api/garageRegistrationForm")
	public String registerGarage(@RequestParam("image") MultipartFile image,
	                              @RequestParam("garageName") String garageName,
	                              @RequestParam("owner") String owner,
	                              @RequestParam("email") String email,
	                              @RequestParam("contact") Long contact,
	                              @RequestParam("password") String password,
	                              @RequestParam("location") String location,
	                              @RequestParam("lat") Double lat,
	                              @RequestParam("longi") Double longi,
	                              @RequestParam("category") String category) {
	    // Check if the file is not empty
	    if (!image.isEmpty()) {
	        try {
	            // Get the file bytes
	            byte[] imageData = image.getBytes();
	            
	            // Generate a unique file name or use the original file name
	            String fileName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();
	            
	            // Define the file path where the image will be stored
	            String filePath = "C:\\Users\\anshay\\Desktop\\Internship\\Online Garage\\online-garage\\src\\assets" + fileName;
	            
	            // Create a new file and write the image bytes to it
	            Files.write(Paths.get(filePath), imageData);
	            
	            // Create a Garage object with the file path instead of image bytes
	            String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
	            Garage garage = new Garage(garageName, owner, email, contact, hashedPassword, location, lat, longi, filePath, category);

	            // Save the garage object to the database or perform other operations
	             garageService.registerGarage(garage);
	            
	            return "success";
	        } catch (IOException e) {
	            e.printStackTrace();
	            return "error";
	        }
	    } else {
	        return "error";
	    }
	}	
	
	@GetMapping("/garages/{categoryName}")
	public List<Garage> getAllGaragesByCategoryName(@RequestParam("categoryName") String categoryName){
		List<Garage> garages = garageService.getGaragesByCategoryName(categoryName);
		for(Garage g : garages) {
			System.out.println(g.getGarageName());
		}
		return garages;
	}
	
	

	
}
