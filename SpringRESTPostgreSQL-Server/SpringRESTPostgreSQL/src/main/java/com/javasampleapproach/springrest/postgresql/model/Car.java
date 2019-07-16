package com.javasampleapproach.springrest.postgresql.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

@Entity
@Table(name = "cars")
@TypeDef(
	    name = "pgsql_enum",
	    typeClass = PostgreSQLEnumType.class
	)
public class Car {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	//join tables by fk 
	@ManyToOne
	@JoinColumn(name = "id_manufacturer")
	private Manufacturer manufacturer;

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
	
	//definition of enum type (projection of enum type from database)
	@Enumerated(EnumType.STRING)
    @Column(length = 5) //max value length
	@Type( type = "pgsql_enum" )
    private Status status;

	public Car() {
	}

	public Car(String model,double capacity, String color, String body, double price, int year, double mileage,Manufacturer manufacturer) {
		this.model = model;
		this.capacity = capacity;
		this.color = color;
		this.body = body;
		this.price = price;
		this.year = year;
		this.mileage = mileage;
		this.manufacturer = manufacturer;
		this.status = Status.for_sale;
	}

	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public void setStatus(Status status) {
		this.status = status;
	}
	
	public Status getStatus() {
		return status;
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
