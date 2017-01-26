package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Car {
	private String brand;
	private String engine;
	private String fuel;
	private String gearbox;
	private String date;
	
	public Car(){
	}
	
	public Car(String brand, String engine, String fuel, String gearbox, String date){
		this.brand = brand;
		this.engine = engine;
		this.fuel = fuel;
		this.gearbox = gearbox;
		this.date = date;
	}
	
	public String getBrand(){
		return this.brand;
	}
	
	public void setBrand(String brand){
		this.brand = brand;
	}
	public String getEngine() {
		return engine;
	}

	public void setEngine(String engine) {
		this.engine = engine;
	}

	public String getFuel() {
		return fuel;
	}

	public void setFuel(String petrol) {
		this.fuel = petrol;
	}

	public String getGearbox() {
		return gearbox;
	}

	public void setGearbox(String gearbox) {
		this.gearbox = gearbox;
	}
	
	public String getDate(){
		return this.date;
	}
	
	public void setDate(String date){
		this.date = date;
	}
}
