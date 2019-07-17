package com.javasampleapproach.springrest.postgresql.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.javasampleapproach.springrest.postgresql.model.Car;

public interface CarRepository extends CrudRepository<Car, Long> {
	List<Car> findByCapacity(double capacity);

	List<Car> findByBody(String body);

	List<Car> findByModel(String model);

	List<Car> findByColor(String color);

	List<Car> findByPrice(double price);
	
	@Query("SELECT DISTINCT model FROM Car")
	List<String> findCarsModels();
	
	@Query("SELECT DISTINCT body FROM Car")
	List<String> findCarsBody();
	
	@Query("SELECT DISTINCT color FROM Car")
	List<String> findCarsColors();
	
	@Query("SELECT DISTINCT capacity FROM Car")
	List<Double> findCarsCapacity();
	
	@Query("SELECT c FROM Car c WHERE c.body LIKE CONCAT('%',:body,'%') and c.model LIKE CONCAT('%',:model,'%')")
	List<Car> findWithParam(@Param("body") String body,@Param("model") String model); //,String model,String color,String name,double price
	
}
