package com.garageservice.og.service;

import java.util.List;

import com.garageservice.og.entity.Garage;

public interface GarageService {

	List<Garage> getAllGarage();
	
	boolean registerGarage(Garage garage);
	
	List<Garage> getGaragesByCategoryName(String name);
	
}
