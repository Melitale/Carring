package dao;

import java.util.ArrayList;
import java.util.List;

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
		this.cars.add(new Car("Opel", "1994"));
		this.cars.add(new Car("Audi", "2015"));
	}
	
	
}
