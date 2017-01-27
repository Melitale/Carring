import { Component, Output, EventEmitter } from "@angular/core"
import { Date } from "models/date";
import { DateRange } from "models/dateRange";

import { DateService } from "services/date.service";

@Component({
    moduleId : module.id,
    selector : "home-searcher",
    templateUrl : "./home.searcher.html",
    styleUrls : [ "./home.searcher.style.css"],
    providers : [DateService]
})

export class HomeSearcherComponent{

    constructor(private dateService : DateService){};

    @Output() dateEmiter = new EventEmitter<DateRange>();
    @Output() cityEmiter = new EventEmitter<string>();

    dateRange = new DateRange();

    search(){
        if(!this.dateFilter()){
            this.error = true;
            return;
        }

        if(!this.cityModel){
            this.error = true;
            return;
        }

        this.dateRange.dateFrom = this.dateFromModel;
        this.dateRange.dateTo = this.dateToModel;

        this.error = false;

        this.dateEmiter.emit(this.dateRange);
        this.cityEmiter.emit(this.cityModel);
    }

    dateFilter() : any{
        if(this.dateFromModel == undefined){
            return false;
        }

        if(this.dateToModel == undefined){
            return false;
        }

        if(!this.dateService.isGreater(this.dateToModel, this.dateFromModel)){
            return false;
        }

        return true;
    }

    dateFromModel : Date;
    dateToModel : Date;
    cityModel : string;
    error : any = false;
    cityError = "Wpisz miasto!";
    dateError = "Wpisz daty! Pamiętaj, data początkowa musi być wcześniejsza od daty poczatkowej."
}