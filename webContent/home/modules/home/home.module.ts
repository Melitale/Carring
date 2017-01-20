import { NgModule } from "@angular/core";
import { CarService } from "../../services/car.service";
import { BrowserModule } from "@angular/platform-browser"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';

import { HomeComponent } from "./components/home/home.component";
import { HomeNavbarComponent } from "./components/home-navbar/home.navbar.component";
import { HomeTableComponent } from "./components/home-table/home.table.component";

@NgModule({
    imports : [
      BrowserModule,
      NgbModule.forRoot(),
      HttpModule
    ],
    declarations : [
      HomeComponent,
      HomeNavbarComponent,
      HomeTableComponent
    ],
    providers: [ CarService ],
    bootstrap : [HomeComponent]
})

export class HomeModule{

}
