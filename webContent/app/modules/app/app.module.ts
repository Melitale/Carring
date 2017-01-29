import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/modules/routes/routes.module';

import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeNavbarComponent } from "./components/home-navbar/home.navbar.component";
import { HomeTableComponent } from "./components/home-table/home.table.component";
import { HomeCartileComponent } from "./components/home-cartile/home.cartile.component";
import { HomeSearcherComponent } from "./components/home-searcher/home.searcher.component";
import { CarDetailComponent } from "./components/car/car.detail.component";

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports : [
      BrowserModule,
      NgbModule.forRoot(),
      HttpModule,
      JsonpModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
    ],
    declarations : [
      AppComponent,
      HomeComponent,
      HomeNavbarComponent,
      HomeTableComponent,
      HomeCartileComponent,
      HomeSearcherComponent,
      CarDetailComponent
    ],
    bootstrap : [AppComponent],
    providers : [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppModule{

}
