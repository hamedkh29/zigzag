import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DatePipe} from "@angular/common";
@Injectable()
export class ResultService  {
  constructor(private http: HttpClient,private datePipe: DatePipe) {
  }

  tripRequest(originId: string, destinationId: string, date: Date): Observable<any[]> {
    return this.http.get<any>(`https://efastatic.vvs.de/umweltrechner/XML_TRIP_REQUEST2?language=de&locationServerActive=1&command=&usage=&anyObjFilter=&searchLimitMinutes=360&ptOptionsActive=1&illumTransfer=on&itOptionsActive=1&delMinDistTrips=1&coordListOutputFormat=STRING&convertStopsPTKernel2LocationServer=1&convertPOIsITKernel2LocationServer=1&outputOptionsActive=1&calcNumberOfTrips=1&itdTime=1600&computeMonomodalTripCar=1&speedFactorCar=100%25&costFactorCar=0%25&distanceFactorCar=10%25&traveltimeFactorCar=90%25&lineRestriction=403&calculateCO2=1&calculateDistance=1&anyType_origin=&type_origin=any&anyObjFilter_origin=0&place_origin=&anyType_destination=&type_destination=any&anyObjFilter_destination=0&place_destination=&outputFormat=rapidJSON&includeFares=true&useUT=true&name_origin=${originId}&name_destination=${destinationId}&itdDate=${this.transformDate(date)}`)
      .pipe(map( res => {
      return res.journeys
    }));
  }

  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyyMMdd');
  }
  //NewServices
}



