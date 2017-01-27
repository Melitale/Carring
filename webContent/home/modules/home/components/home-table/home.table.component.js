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
var dateRange_1 = require("models/dateRange");
var car_service_1 = require("services/car.service");
var date_service_1 = require("services/date.service");
var HomeTableComponent = (function () {
    function HomeTableComponent(carService, dateService) {
        this.carService = carService;
        this.dateService = dateService;
        this.city = "Gdańsk";
    }
    HomeTableComponent.prototype.getCars = function () {
        var _this = this;
        this.carService.getAllCars().then(function (cars) {
            _this.cars = cars;
            console.log(cars);
        });
    };
    HomeTableComponent.prototype.ngOnInit = function () {
    };
    HomeTableComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var changedProp = changes[propertyName];
            switch (propertyName) {
                case "dateRange": {
                    if (!changedProp.isFirstChange()) {
                        this.getCars();
                    }
                }
            }
        }
    };
    return HomeTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", dateRange_1.DateRange)
], HomeTableComponent.prototype, "dateRange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomeTableComponent.prototype, "city", void 0);
HomeTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "home-table",
        templateUrl: "./home.table.component.html",
        styleUrls: ["./home.table.component.css"],
        providers: [car_service_1.CarService, date_service_1.DateService]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        date_service_1.DateService])
], HomeTableComponent);
exports.HomeTableComponent = HomeTableComponent;
//# sourceMappingURL=home.table.component.js.map