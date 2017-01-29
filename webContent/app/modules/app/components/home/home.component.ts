import { Component } from "@angular/core";

import { DateRange } from "models/dateRange";

@Component({
    moduleId : module.id,
    selector : "home",
    templateUrl : "./home.component.html"
})

export class HomeComponent{
    dateRange : DateRange;
    city : string;

    dateEmiter(dateRange : DateRange){
        console.log("Date");
        this.dateRange = dateRange;
    }

    cityEmiter(city : string){
        console.log(city);
        this.city = city;
    }
}
