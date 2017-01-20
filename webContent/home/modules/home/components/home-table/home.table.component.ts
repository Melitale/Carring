import { Component, OnInit } from "@angular/core";

import { Car } from "../../../../models/car";

import { CarService } from "../../../../services/car.service";

@Component({
    moduleId : module.id,
    selector : "home-table",
    templateUrl : "./home.table.component.html",
    providers: [CarService]
})

export class HomeTableComponent implements OnInit{
    constructor(private carService : CarService) {}

    cars : Car[];

    getCars() : void {
        console.log("coming in");
        this.carService.getCarsFromServer().then(
            cars => {
                this.cars = cars;
                console.log(this.cars);
            }
        );
    }

    ngOnInit() : void {
        this.getCars();
    }

}