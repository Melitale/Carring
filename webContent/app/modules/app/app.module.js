"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var routes_module_1 = require("app/modules/routes/routes.module");
var app_component_1 = require("./components/app/app.component");
var home_component_1 = require("./components/home/home.component");
var home_navbar_component_1 = require("./components/home-navbar/home.navbar.component");
var home_table_component_1 = require("./components/home-table/home.table.component");
var home_cartile_component_1 = require("./components/home-cartile/home.cartile.component");
var home_searcher_component_1 = require("./components/home-searcher/home.searcher.component");
var home_footer_component_1 = require("./components/home-footer/home.footer.component");
var car_detail_component_1 = require("./components/car/car.detail.component");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            routes_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            home_navbar_component_1.HomeNavbarComponent,
            home_table_component_1.HomeTableComponent,
            home_cartile_component_1.HomeCartileComponent,
            home_searcher_component_1.HomeSearcherComponent,
            home_footer_component_1.HomeFooterComponent,
            car_detail_component_1.CarDetailComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map