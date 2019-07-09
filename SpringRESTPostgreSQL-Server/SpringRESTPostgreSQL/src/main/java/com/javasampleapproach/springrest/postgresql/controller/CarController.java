package com.javasampleapproach.springrest.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.postgresql.model.Car;
import com.javasampleapproach.springrest.postgresql.repo.CarRepository;
import com.javasampleapproach.springrest.postgresql.model.Manufacturer;
import com.javasampleapproach.springrest.postgresql.repo.ManufacturerRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class CarController {
	@Autowired
	CarRepository carrepository;
	@Autowired
	ManufacturerRepository manufacturerrepository;

	@GetMapping("/car")
	public List<Car> getAllCars() {
		System.out.println("Get all Cars...");

		List<Car> cars = new ArrayList<>();
		carrepository.findAll().forEach(cars::add);
		for (Car car : cars) {
			List<Manufacturer> carmanufacturer = manufacturerrepository.findById(car.getId_manufacturer());
			for (Manufacturer man : carmanufacturer) {
				car.setManufacturer(man.getName());
				car.setCountry(man.getCountry());
			}
		}
		return cars;
	}
	
	@GetMapping("/car/manufacturers")
	public List<Manufacturer> getAllManufacturers() {
		System.out.println("Get getAllManufacturers...");

		List<Manufacturer> carmanufacturer = new ArrayList<>();
		manufacturerrepository.findAll().forEach(carmanufacturer::add);

		return carmanufacturer;
	}
	
	@GetMapping(value = "car/capacity/{capacity}")
	public List<Car> findByCapacity(@PathVariable double capacity) {

		List<Car> cars = carrepository.findByCapacity(capacity);
		return cars;
	}
	
	@GetMapping(value = "car/idm/{id_manufacturer}")
	public List<Manufacturer> findById(@PathVariable long id_manufacturer) {
		List<Manufacturer> carmanufacturer = manufacturerrepository.findById(id_manufacturer);
		return carmanufacturer;
	}
	

}
