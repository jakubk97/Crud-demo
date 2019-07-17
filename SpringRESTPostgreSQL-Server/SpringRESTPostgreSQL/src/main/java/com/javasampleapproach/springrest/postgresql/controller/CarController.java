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
import org.springframework.web.bind.annotation.RestController;
import com.javasampleapproach.springrest.postgresql.model.Car;
import com.javasampleapproach.springrest.postgresql.repo.CarRepository;
import com.javasampleapproach.springrest.postgresql.model.Manufacturer;
import com.javasampleapproach.springrest.postgresql.model.Role;
import com.javasampleapproach.springrest.postgresql.model.Status;
import com.javasampleapproach.springrest.postgresql.model.User;
import com.javasampleapproach.springrest.postgresql.repo.ManufacturerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class CarController {
	@Autowired
	CarRepository carrepository;

	@Autowired
	ManufacturerRepository manufacturerrepository;

	// downloading all cars
	@GetMapping("/car")
	public List<Car> getAllCars() {
		System.out.println("Get all Cars...");

		List<Car> cars = new ArrayList<>();
		carrepository.findAll().forEach(cars::add);
		return cars;
	}

	// downloading all manufacturers
	@GetMapping("/car/manufacturers")
	public List<Manufacturer> getAllManufacturers() {
		System.out.println("Get getAllManufacturers...");
		List<Manufacturer> carmanufacturer = new ArrayList<>();
		manufacturerrepository.findAll().forEach(carmanufacturer::add);
		return carmanufacturer;
	}

	// downloading all cars models
	@GetMapping("/car/models")
	public List<String> findCarsModel() {
		System.out.println("Get all cars models...");
		List<String> model = new ArrayList<>();
		carrepository.findCarsModels().forEach(model::add);
		return model;
	}

	// downloading all cars body
	@GetMapping("/car/body")
	public List<String> findCarsBody() {
		System.out.println("Get all cars body...");
		List<String> body = new ArrayList<>();
		carrepository.findCarsBody().forEach(body::add);
		return body;
	}

	// downloading all cars color
	@GetMapping("/car/color")
	public List<String> findCarsColor() {
		System.out.println("Get all cars color...");
		List<String> color = new ArrayList<>();
		carrepository.findCarsColors().forEach(color::add);
		return color;
	}

	// downloading all cars capacity
	@GetMapping("/car/capacity")
	public List<Double> findCarsCapacity() {
		System.out.println("Get all cars capacity...");
		List<Double> capacity = new ArrayList<>();
		carrepository.findCarsCapacity().forEach(capacity::add);
		return capacity;
	}

	// downloading all cars capacity
	@GetMapping("/car/search")
	public List<Car> findWithParam(@RequestBody Car car) {
		System.out.println("Search cars...");
		System.out.println(car.getBody());
		System.out.println(car.getModel());
		List<Car> cars = new ArrayList<>();
		carrepository.findWithParam(car.getBody(),car.getModel()).forEach(cars::add);
		return cars;
	}

	// downloading all cars with given capacity
	@GetMapping(value = "car/capacity/{capacity}")
	public List<Car> findByCapacity(@PathVariable double capacity) {

		List<Car> cars = carrepository.findByCapacity(capacity);
		return cars;
	}

	// downloading all manufacturers with given id
	@GetMapping(value = "car/manufacturer/{id_manufacturer}")
	public List<Manufacturer> findById(@PathVariable long id_manufacturer) {
		List<Manufacturer> carmanufacturer = manufacturerrepository.findById(id_manufacturer);
		return carmanufacturer;
	}

	// create new manufacturer
	@PostMapping(value = "car/manufacturer/create")
	public Manufacturer postManufacturer(@RequestBody Manufacturer manufacturer) {
		System.out.println("Posting Manufacturers...");
		Manufacturer _manufacturer = manufacturerrepository
				.save(new Manufacturer(manufacturer.getName(), manufacturer.getCountry()));
		return _manufacturer;
	}

	// delete user with given id
	@DeleteMapping("/car/{id}")
	public ResponseEntity<String> deleteCar(@PathVariable("id") long id) {
		System.out.println("Delete Car with ID = " + id + "...");
		carrepository.deleteById(id);
		System.out.println("Deleted");
		return new ResponseEntity<>("Car deleted!", HttpStatus.OK);
	}

	// update car with given id
	@PutMapping("/car/update/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable("id") long id, @RequestBody Car car) {
		System.out.println("Update Car with ID = " + id + "...");

		Optional<Car> carData = carrepository.findById(id);
		if (carData.isPresent()) {
			System.out.println("Updating");
			return new ResponseEntity<>(carrepository.save(car), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// update to buy car with given id
	@PutMapping("/car/buy/{id}")
	public ResponseEntity<Car> buyCar(@PathVariable("id") long id, @RequestBody Car car) {
		System.out.println("Buy Car with ID = " + id + "...");

		Optional<Car> carData = carrepository.findById(id);
		if (carData.isPresent()) {
			System.out.println("Buying");
			car.setStatus(Status.offer_to_buy);
			return new ResponseEntity<>(carrepository.save(car), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// create new car
	@PostMapping(value = "/car/create")
	public ResponseEntity<String> postCar(@RequestBody Car car) {
		System.out.println("Posting Car...");
		car.setStatus(Status.for_sale);
		Car carcreated = carrepository.save(car);
		Optional<Car> carData = carrepository.findById(carcreated.getId());
		if (carData.isPresent()) {
			return new ResponseEntity<>("Created", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
		}
	}

}
