package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cars")
public class Car {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	//join tables by fk 
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_manufacturer")
	private Manufacturer cars;

	@Column(name = "status")
	private String status;

	@Column(name = "year")
	private int year;

	@Column(name = "mileage")
	private double mileage;

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

	public Car(String model, Manufacturer cars, String manufacturer, String country, long id_manufacturer,
			double capacity, String color, String body, double price, String status, int year, double mileage) {
		this.model = model;
		this.cars = cars;
		this.capacity = capacity;
		this.color = color;
		this.body = body;
		this.price = price;
		this.status = status;
		this.year = year;
		this.mileage = mileage;

	}

	public Manufacturer getCars() {
		return cars;
	}

	public void setCars(Manufacturer cars) {
		this.cars = cars;
	}

	public long getId() {
		return id;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getMileage() {
		return mileage;
	}

	public void setMileage(double mileage) {
		this.mileage = mileage;
	}
}
