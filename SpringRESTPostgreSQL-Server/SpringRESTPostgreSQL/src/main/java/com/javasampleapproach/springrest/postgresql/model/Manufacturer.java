package com.javasampleapproach.springrest.postgresql.model;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "manufacturers")
public class Manufacturer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long Id;

	@Column(name = "name")
	private String name;

	@Column(name = "country")
	private String country;

	// mapping to cars from Cars class to get values of name and country from table
	@OneToMany(mappedBy = "manufacturer", cascade = CascadeType.ALL)
	private Set<Car> manufacturer;

	public Manufacturer() {
	}

	public Manufacturer(String name, String country) {
		this.name = name;
		this.country = country;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setManufacturer(Set<Car> manufacturer) {
		this.manufacturer = manufacturer;
	}

	public void setId(long id) {
		Id = id;
	}

	public long getId() {
		return Id;
	}
}
