package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Car {
	private String brand;
	private String date;
	
	public Car(){
	}
	
	public Car(String brand, String date){
		this.brand = brand;
		this.date = date;
	}
	
	public String getBrand(){
		return this.brand;
	}
	
	public void setBrand(String brand){
		this.brand = brand;
	}
	
	public String getDate(){
		return this.date;
	}
	
	public void setDate(String date){
		this.date = date;
	}
}
