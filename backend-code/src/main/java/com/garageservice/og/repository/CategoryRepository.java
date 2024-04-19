package com.garageservice.og.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.garageservice.og.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
