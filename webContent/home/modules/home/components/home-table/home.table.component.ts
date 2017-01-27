import { Component, OnInit, Input, SimpleChange, OnChanges } from "@angular/core";

import { Car } from "models/car";
import { Date } from "models/date";
import { DateRange } from "models/dateRange";

import { CarService } from "services/car.service";
import { DateService } from "services/date.service";

@Component({
    moduleId : module.id,
    selector : "home-table",
    templateUrl : "./home.table.component.html",
    styleUrls: ["./home.table.component.css"],
    providers: [CarService, DateService]
})

export class HomeTableComponent implements OnInit, OnChanges{
    constructor(
        private carService : CarService,
        private dateService : DateService
    ) {}
    
    @Input() dateRange : DateRange;
    @Input() city : string = "Gdańsk";

    cars : Car[];

    dateFromLabel : string;
    dateToLabel : string;

    getCars() : void {
        this.carService.getAllCars().then(
            cars => {
                this.cars = cars;
                console.log(cars);
            }
        );
    }

    ngOnInit() : void {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        for(let propertyName in changes){
            let changedProp = changes[propertyName];
            switch(propertyName){
                case "dateRange" : {
                    if(!changedProp.isFirstChange()){
                        this.getCars();
                    }
                }
            }
        }
    }
}