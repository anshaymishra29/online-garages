package com.garageservice.og.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.garageservice.og.entity.Garage;

public interface GarageRepository extends JpaRepository<Garage, Long>{

	@Query("select g from Garage g where g.category = :categoryName")
	List<Garage> getAllGaragesByCategoryName(@Param("categoryName") String categoryName);
}
