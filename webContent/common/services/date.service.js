"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DateService = (function () {
    function DateService() {
    }
    DateService.prototype.isGreater = function (fdate, sdate) {
        if (fdate.year > sdate.year) {
            return true;
        }
        if (fdate.year < sdate.year) {
            return false;
        }
        if (fdate.month > sdate.month) {
            return true;
        }
        if (fdate.month < sdate.month) {
            return false;
        }
        if (fdate.day > sdate.day) {
            return true;
        }
        if (fdate.day <= sdate.day) {
            return false;
        }
    };
    DateService.prototype.printDate = function (date) {
        var day = "0" + date.day;
        var month = "0" + date.month;
        if (date.day >= 10) {
            day = "" + date.day;
        }
        if (date.month >= 10) {
            month = "" + date.month;
        }
        return day + "." + month + "." + date.year;
    };
    return DateService;
}());
DateService = __decorate([
    core_1.Injectable()
], DateService);
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map