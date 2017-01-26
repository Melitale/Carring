import { Component, Input } from "@angular/core";

import { Car } from "../../../../models/car";

@Component({
    moduleId : module.id,
    selector : "home-cartile",
    templateUrl : "./home.cartile.long.component.html",
    styleUrls : ["./home.cartile.long.component.css"]
})

export class HomeCartileComponent{
    @Input()
    car : Car;

    payment = {
        cash : true,
        creditCard : true
    }
}