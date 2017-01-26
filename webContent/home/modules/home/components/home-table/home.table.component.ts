import { Component, OnInit } from "@angular/core";

import { Car } from "../../../../models/car";

import { CarService } from "../../../../services/car.service";

@Component({
    moduleId : module.id,
    selector : "home-table",
    templateUrl : "./home.table.component.html",
    styleUrls: ["./home.table.component.css"],
    providers: [CarService]
})

export class HomeTableComponent implements OnInit{
    constructor(private carService : CarService) {}

    cars : Car[];

    getCars() : void {
        this.carService.getAllCars().then(
            cars => {
                this.cars = cars;
                console.log(cars);
            }
        );
    }

    ngOnInit() : void {
        this.getCars();
    }

}