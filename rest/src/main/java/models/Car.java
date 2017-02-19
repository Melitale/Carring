package models;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Car {
	private int id;
	
	private String brand;
	private String model;
	private String type;
	private String date;
	private int mileage;
	private String color;
	
	private String seats;
	private String door;
	
	private String engine;
	private int power;
	private int torque;
	private String fuel;
	private String gearbox;
	private String drive;
	
	private List<String> accesory;
	
	public Car(){
	}
	
	public Car(int id, String brand, String model, String type, String date, int mileage, String color, String seats, String door, String engine, int power, int torque, String fuel, String gearbox, String drive){
		this.id = id;
		
		this.brand = brand;
		this.model = model;
		this.type = type;
		this.date = date;
		this.mileage = mileage;
		this.color = color;
		
		this.seats = seats;
		this.door = door;
		
		this.engine = engine;
		this.power = power;
		this.torque = torque;
		this.fuel = fuel;
		this.gearbox = gearbox;
		this.drive = drive;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getMileage() {
		return mileage;
	}

	public void setMileage(int mileage) {
		this.mileage = mileage;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSeats() {
		return seats;
	}

	public void setSeats(String seats) {
		this.seats = seats;
	}

	public String getDoor() {
		return door;
	}

	public void setDoor(String door) {
		this.door = door;
	}

	public String getEngine() {
		return engine;
	}

	public void setEngine(String engine) {
		this.engine = engine;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public int getTorque() {
		return torque;
	}

	public void setTorque(int torque) {
		this.torque = torque;
	}

	public String getFuel() {
		return fuel;
	}

	public void setFuel(String fuel) {
		this.fuel = fuel;
	}

	public String getGearbox() {
		return gearbox;
	}

	public void setGearbox(String gearbox) {
		this.gearbox = gearbox;
	}

	public String getDrive() {
		return drive;
	}

	public void setDrive(String drive) {
		this.drive = drive;
	}

	public List<String> getAccesory() {
		return accesory;
	}

	public void setAccesory(List<String> accesory) {
		this.accesory = accesory;
	}
	
	
}
