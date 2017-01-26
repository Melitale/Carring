"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var car_service_1 = require("../../services/car.service");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var home_component_1 = require("./components/home/home.component");
var home_navbar_component_1 = require("./components/home-navbar/home.navbar.component");
var home_table_component_1 = require("./components/home-table/home.table.component");
var home_cartile_component_1 = require("./components/home-cartile/home.cartile.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            http_1.HttpModule
        ],
        declarations: [
            home_component_1.HomeComponent,
            home_navbar_component_1.HomeNavbarComponent,
            home_table_component_1.HomeTableComponent,
            home_cartile_component_1.HomeCartileComponent
        ],
        providers: [car_service_1.CarService],
        bootstrap: [home_component_1.HomeComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map