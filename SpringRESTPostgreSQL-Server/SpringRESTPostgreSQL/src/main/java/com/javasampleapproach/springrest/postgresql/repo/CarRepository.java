package com.javasampleapproach.springrest.postgresql.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.javasampleapproach.springrest.postgresql.model.Car;

public interface CarRepository extends CrudRepository<Car, Long> {
	List<Car> findByCapacity(double capacity);
}
