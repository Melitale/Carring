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
var date_service_1 = require("services/date.service");
var HomeSearcherComponent = (function () {
    function HomeSearcherComponent(dateService) {
        this.dateService = dateService;
        this.dateEmiter = new core_1.EventEmitter();
        this.cityEmiter = new core_1.EventEmitter();
        this.dateRange = new dateRange_1.DateRange();
        this.error = false;
        this.cityError = "Wpisz miasto!";
        this.dateError = "Wpisz daty! Pamiętaj, data początkowa musi być wcześniejsza od daty poczatkowej.";
    }
    ;
    HomeSearcherComponent.prototype.search = function () {
        if (!this.dateFilter()) {
            this.error = true;
            return;
        }
        if (!this.cityModel) {
            this.error = true;
            return;
        }
        this.dateRange.dateFrom = this.dateFromModel;
        this.dateRange.dateTo = this.dateToModel;
        this.error = false;
        this.dateEmiter.emit(this.dateRange);
        this.cityEmiter.emit(this.cityModel);
    };
    HomeSearcherComponent.prototype.dateFilter = function () {
        if (this.dateFromModel == undefined) {
            return false;
        }
        if (this.dateToModel == undefined) {
            return false;
        }
        if (!this.dateService.isGreater(this.dateToModel, this.dateFromModel)) {
            return false;
        }
        return true;
    };
    return HomeSearcherComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HomeSearcherComponent.prototype, "dateEmiter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HomeSearcherComponent.prototype, "cityEmiter", void 0);
HomeSearcherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "home-searcher",
        templateUrl: "./home.searcher.html",
        styleUrls: ["./home.searcher.style.css"],
        providers: [date_service_1.DateService]
    }),
    __metadata("design:paramtypes", [date_service_1.DateService])
], HomeSearcherComponent);
exports.HomeSearcherComponent = HomeSearcherComponent;
//# sourceMappingURL=home.searcher.component.js.map