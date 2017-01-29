package resources;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dao.CarDao;
import models.Car;

@Path("/car")
public class CarResource {
    private CarDao carDao;
    
    public CarResource(){
        carDao = new CarDao();
    }
    
    @GET
    @Path("/all")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getAllCars(){
    	GenericEntity<List<Car>> generic = new GenericEntity<List<Car>>(carDao.getAllCars()){};
		return Response.ok()
			.entity(generic)
			.header("Access-Control-Allow-Origin", "*")
			.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
			.build();
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCar(@PathParam("id") int id){
    	GenericEntity<Car> generic = new GenericEntity<Car>(carDao.getCar(id)){};
		return Response.ok()
			.entity(generic)
			.header("Access-Control-Allow-Origin", "*")
			.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
			.build();
    }
}
