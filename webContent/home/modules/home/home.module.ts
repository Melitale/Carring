import { NgModule } from "@angular/core";
import { CarService } from "../../services/car.service";
import { BrowserModule } from "@angular/platform-browser"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from "./components/home/home.component";
import { HomeNavbarComponent } from "./components/home-navbar/home.navbar.component";
import { HomeTableComponent } from "./components/home-table/home.table.component";
import { HomeSearcherComponent } from "./components/home-searcher/home.searcher.component";

@NgModule({
    imports : [
      BrowserModule,
      NgbModule.forRoot(),
      HttpModule,
      JsonpModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations : [
      HomeComponent,
      HomeNavbarComponent,
      HomeTableComponent,
      HomeSearcherComponent
    ],
    providers: [ CarService ],
    bootstrap : [HomeComponent]
})

export class HomeModule{

}
