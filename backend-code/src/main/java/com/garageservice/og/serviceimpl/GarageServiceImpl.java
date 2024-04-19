package com.garageservice.og.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.garageservice.og.entity.Category;
import com.garageservice.og.entity.Garage;
import com.garageservice.og.repository.GarageRepository;
import com.garageservice.og.service.GarageService;

@Service
public class GarageServiceImpl implements GarageService{

	@Autowired
	private GarageRepository garageRepository;
	
	List<Garage> list = new ArrayList<>();
	
	public List<Garage> getAllGarage(){
		return garageRepository.findAll();
	}

	@Override
	public boolean registerGarage(Garage garage) {
		Garage g = garageRepository.save(garage);
		if(g != null) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public List<Garage> getGaragesByCategoryName(String name) {
		
		return garageRepository.getAllGaragesByCategoryName(name);
	}

	
	
	
}
