package com.javasampleapproach.springrest.postgresql.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.postgresql.model.Car;
import com.javasampleapproach.springrest.postgresql.model.Customer;
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
	
//	@PostMapping(value = "/car/manufacturer/create")
//	@ResponseBody
//	public Manufacturer postManufacturer(@RequestParam("name") String name,@RequestParam("country") String country) {
//		System.out.println("1");
//		System.out.println(name);
//		System.out.println(country);
//		System.out.println("Creating manufacturers - "+name+country);
//		Manufacturer _manufacturer = manufacturerrepository.save(new Manufacturer(name, country));
//		return _manufacturer;
//	}
	
	@PostMapping(value = "car/manufacturer/create")
	public Manufacturer postManufacturer(@RequestBody Manufacturer manufacturer) {
		System.out.println("Posting Manufacturers...");
		Manufacturer _manufacturer = manufacturerrepository.save(new Manufacturer(manufacturer.getName(), manufacturer.getCountry()));
		return _manufacturer;
	}
	
	

}
