package com.javasampleapproach.springrest.postgresql.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.javasampleapproach.springrest.postgresql.model.Manufacturer;

public interface ManufacturerRepository extends CrudRepository<Manufacturer, Long> {
	List<Manufacturer> findById(long Id);
}
