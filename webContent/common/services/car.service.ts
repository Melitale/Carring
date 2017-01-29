import {Injectable} from "@angular/core";
import { Headers, Http } from "@angular/http";

import {Car} from "../models/car";

import "rxjs/add/operator/toPromise"

@Injectable()
export class CarService{

    constructor(private http : Http){}

    private getCarPath = 'http://localhost:8080/rest/api/car/';

    getAllCars() : Promise<Car[]>{
        console.log("coming in");
        return this.http.get(this.getCarPath + "all")
            .toPromise()
            .then(response => response.json() as Car[])
            .catch(this.handleError);
    }

    getCar(id : number) : Promise<Car>{
        console.log(this.getCarPath + id);
        return this.http.get(this.getCarPath + id)
            .toPromise()
            .then(response => response.json() as Car)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}