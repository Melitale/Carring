package dao;

import java.util.ArrayList;
import java.util.List;

import dictionary.Fuel;
import dictionary.Gearbox;
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
		return cars.get(index);
	}
	
	private void populateList(){
		this.cars.add(new Car("Opel", "1.9 TDI", Fuel.DIESEL, Gearbox.AUTOMATE, "1994"));
		this.cars.add(new Car("Audi", "1.6 TI", Fuel.PETROL, Gearbox.MANUAL, "2015"));
		this.cars.add(new Car("Ford", "1.3 TDI", Fuel.DIESEL, Gearbox.AUTOMATE, "2016"));
		this.cars.add(new Car("Volvo", "2.0 TD", Fuel.DIESEL, Gearbox.MANUAL, "2014"));
		this.cars.add(new Car("Skoda", "1.9 TDI", Fuel.DIESEL, Gearbox.AUTOMATE, "2005"));
		this.cars.add(new Car("Volkwagen", "1.8 TI", Fuel.PETROL, Gearbox.MANUAL, "2008"));
	}
	
	
}
