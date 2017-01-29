"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var car_1 = require("models/car");
var car_service_1 = require("services/car.service");
var CarDetailComponent = (function () {
    function CarDetailComponent(carService, route, location) {
        this.carService = carService;
        this.route = route;
        this.location = location;
        this.car = new car_1.Car();
        this.loading = true;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params
            .switchMap(function (params) { return _this.carService.getCar(+params['id']); })
            .subscribe(function (car) {
            console.log(car);
            _this.car = car;
        });
        this.loading = false;
    };
    CarDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CarDetailComponent;
}());
CarDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "car-detail-component",
        templateUrl: "./car.detail.component.html",
        styleUrls: ["./car.detail.component.css"],
        providers: [car_service_1.CarService]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.ActivatedRoute,
        common_1.Location])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=car.detail.component.js.map