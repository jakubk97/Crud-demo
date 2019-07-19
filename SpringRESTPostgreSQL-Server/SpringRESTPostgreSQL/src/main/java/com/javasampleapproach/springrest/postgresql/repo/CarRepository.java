package com.javasampleapproach.springrest.postgresql.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.javasampleapproach.springrest.postgresql.model.Car;
import com.javasampleapproach.springrest.postgresql.model.Status;

public interface CarRepository extends CrudRepository<Car, Long> {
	
	List<Car> findByCapacity(double capacity);

	List<Car> findByBody(String body);

	List<Car> findByModel(String model);

	List<Car> findByColor(String color);

	List<Car> findByPrice(double price);
	
	@Query("SELECT DISTINCT c.model FROM Car c JOIN c.manufacturer m WHERE m.id=:id")
	List<String> findCarsModelsByManufacturer(@Param("id") long id);

	@Query("SELECT DISTINCT model FROM Car")
	List<String> findCarsModels();

	@Query("SELECT DISTINCT body FROM Car")
	List<String> findCarsBody();

	@Query("SELECT DISTINCT color FROM Car")
	List<String> findCarsColors();

	@Query("SELECT DISTINCT capacity FROM Car")
	List<Double> findCarsCapacity();

	@Query("SELECT c FROM Car c JOIN c.manufacturer m WHERE c.body like %:body% and c.model like %:model% and c.color like %:color% and c.status=:status and c.capacity=:capacity and m.name like %:name% and c.price BETWEEN :pricefrom AND :priceto")
	List<Car> findWithParam(@Param("body") String body, @Param("model") String model, @Param("color") String color,@Param("status") Status status
			,@Param("capacity") double capacity,@Param("name") String name,@Param("pricefrom") double pricefrom,@Param("priceto") double priceto);
	
	@Query("SELECT c FROM Car c JOIN c.manufacturer m WHERE c.body like %:body% and c.model like %:model% and c.color like %:color% and c.capacity=:capacity and m.name like %:name% and c.price BETWEEN :pricefrom AND :priceto")
	List<Car> findWithParam(@Param("body") String body, @Param("model") String model, @Param("color") String color,@Param("capacity") double capacity
			,@Param("name") String name,@Param("pricefrom") double pricefrom,@Param("priceto") double priceto);
	
	@Query("SELECT c FROM Car c JOIN c.manufacturer m WHERE c.body like %:body% and c.model like %:model% and c.color like %:color% and c.status=:status and m.name like %:name% and c.price BETWEEN :pricefrom AND :priceto")
	List<Car> findWithParam(@Param("body") String body, @Param("model") String model, @Param("color") String color,@Param("status") Status status,@Param("name") String name
			,@Param("pricefrom") double pricefrom,@Param("priceto") double priceto);
	
	@Query("SELECT c FROM Car c JOIN c.manufacturer m WHERE c.body like %:body% and c.model like %:model% and c.color like %:color% and m.name like %:name% and c.price BETWEEN :pricefrom AND :priceto ")
	List<Car> findWithParam(@Param("body") String body, @Param("model") String model, @Param("color") String color,@Param("name") String name
			,@Param("pricefrom") double pricefrom,@Param("priceto") double priceto);
}
