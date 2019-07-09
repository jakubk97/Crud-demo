package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cars")
public class Car {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@ManyToOne 
	@JoinColumn("id") 
	Manufacturer cars;
	
	@Column(name = "id_manufacturer")
	private long id_manufacturer;
	
	@Column(name = "manufacturer")
	private String manufacturer;

	@Column(name = "country")
	private String country;

	@Column(name = "model")
	private String model;

	@Column(name = "capacity")
	private double capacity;

	@Column(name = "color")
	private String color;
	
	@Column(name = "body")
	private String body;
	
	@Column(name = "price")
	private double price;
	
	public Car() {
	}

	public Car(String model,String manufacturer,String country,long id_manufacturer, double capacity,String color,String body, double price) {
		this.model = model;
		this.id_manufacturer = id_manufacturer;
		this.manufacturer = manufacturer;
		this.country = country;
		this.capacity = capacity;
		this.color = color;
		this.body = body;
		this.price = price;
	}
	
	public Car(String model,long id_manufacturer, double capacity,String color,String body, double price) {
		this.model = model;
		this.id_manufacturer = id_manufacturer;
		this.capacity = capacity;
		this.color = color;
		this.body = body;
		this.price = price;
	}

	public long getId() {
		return id;
	}
	
	public long getId_manufacturer() {
		return id_manufacturer;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getModel() {
		return this.model;
	}

	public double getCapacity() {
		return capacity;
	}

	public void setCapacity(double capacity) {
		this.capacity = capacity;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	@Override
	public String toString() {
		return "Car [id=" + id + ", model=" + model + ", capacity=" + capacity + ", color=" + color + ", body=" + body+ ", price=" + price + "]";
	}
}
