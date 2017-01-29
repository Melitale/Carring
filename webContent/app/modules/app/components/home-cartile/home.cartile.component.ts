import { Component, Input } from "@angular/core";

import { Router } from "@angular/router"

import { Car } from "models/car";

@Component({
    moduleId : module.id,
    selector : "home-cartile",
    templateUrl : "./home.cartile.long.component.html",
    styleUrls : ["./home.cartile.long.component.css"]
})

export class HomeCartileComponent{
    constructor(
        private router : Router,
    ){}

    @Input()
    car : Car;

    payment = {
        cash : true,
        creditCard : true
    }

    viewDetail(id : number) : void {
        console.log(id);
        this.router.navigate(['/detail', id]);
    }
}