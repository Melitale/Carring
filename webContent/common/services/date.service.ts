import { Injectable } from "@angular/core";

import { Date } from "models/date"; 

@Injectable()
export class DateService{
    isGreater(fdate : Date, sdate : Date) : any{
        if(fdate.year > sdate.year){
            return true;
        }

        if(fdate.year < sdate.year){
            return false;
        }

        if(fdate.month > sdate.month){
            return true;
        }

        if(fdate.month < sdate.month){
            return false;
        }

        if(fdate.day > sdate.day){
            return true;
        }

        if(fdate.day <= sdate.day){
            return false;
        }
    }

    printDate(date : Date){
        let day = "0" + date.day;
        let month = "0" + date.month;

        if(date.day >= 10){
            day = ""+date.day;
        }

        if(date.month >= 10){
            month = ""+date.month;
        }

        return day + "." + month + "." + date.year;
    }
}