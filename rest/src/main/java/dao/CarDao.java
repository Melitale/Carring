package dao;

import java.util.ArrayList;
import java.util.List;

import dictionary.Color;
import dictionary.Door;
import dictionary.Drive;
import dictionary.Fuel;
import dictionary.Gearbox;
import dictionary.Seats;
import dictionary.Type;
import models.Car;

public class CarDao {
	private List<Car> cars;
	
	public CarDao(){
		cars = new ArrayList<Car>();
		populateList();
	}
	
	public List<Car> getAllCars(){
		return this.cars;
	}
	
	public Car getCar(int index){
		for(Car car : cars){
			if(car.getId() == index){
				return car;
			}
		}
		
		return new Car();
	}
	
	private void populateList(){
		this.cars.add(new Car(0, "Audi", "A3", Type.HATCHBACK, "2015", 20000, Color.BLUE, Seats.FIVE, Door.THREE, "1.6", 130, 1500, Fuel.DIESEL, Gearbox.AUTOMATE, Drive.FRONT));
		this.cars.add(new Car(1, "Opel", "Astra", Type.SEDAN, "2010", 100000, Color.GREEN, Seats.FIVE, Door.FIVE, "1.9", 110, 1500, Fuel.PETROL, Gearbox.MANUAL, Drive.FRONT));
		this.cars.add(new Car(2, "Volkswagen", "Golf 6", Type.KOMBI, "2012", 120000, Color.BLACK, Seats.FIVE, Door.FIVE, "1.9", 150, 1500, Fuel.DIESEL, Gearbox.AUTOMATE, Drive.FRONT));
		this.cars.add(new Car(3, "Mercedes-Benz", "ML", Type.OFF_ROAD, "2015", 100000, Color.BROWN, Seats.FIVE, Door.FIVE, "3.0", 180, 1500, Fuel.DIESEL, Gearbox.AUTOMATE, Drive.AUTO_4X4));
	}
	
	
}
