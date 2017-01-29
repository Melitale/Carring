import { NgModule } from "@angular/core"
import {RouterModule, Routes} from "@angular/router"

import {CarDetailComponent} from "components/car/car.detail.component";
import { HomeComponent } from "components/home/home.component";

const routes : Routes = [
    { path : '', redirectTo : 'home', pathMatch : "full"},
    { path : 'home', component : HomeComponent},
    { path : 'detail/:id', component : CarDetailComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


