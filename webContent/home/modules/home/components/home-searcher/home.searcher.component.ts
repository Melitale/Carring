import { Component } from "@angular/core"

@Component({
    moduleId : module.id,
    selector : "home-searcher",
    templateUrl : "./home.searcher.html",
    styleUrls : [ "./home.searcher.style.css"]
})

export class HomeSearcherComponent{
    dateFromModel : any;
    dateToModel : any;
}