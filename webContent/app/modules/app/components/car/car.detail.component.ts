import { Component, OnInit} from "@angular/core"
import { ActivatedRoute, Params} from "@angular/router"
import { Location } from "@angular/common"
import 'rxjs/add/operator/switchMap';

import { Car } from "models/car";

import { CarService } from "services/car.service";

@Component({
    moduleId : module.id,
    selector : "car-detail-component",
    templateUrl : "./car.detail.component.html",
    styleUrls: ["./car.detail.component.css"],
    providers : [CarService]
})

export class CarDetailComponent implements OnInit{
    constructor(
        private carService : CarService,
        private route : ActivatedRoute,
        private location : Location
    ){}

    car = new Car();
    loading = true;

    ngOnInit() : void {
        this.loading = true;
        this.route.params
            .switchMap((params : Params) => this.carService.getCar(+params['id']))
            .subscribe(car => {
                console.log(car);
                this.car = car;
            });
        this.loading = false;
    }

    goBack() : void {
        this.location.back();
    }
}