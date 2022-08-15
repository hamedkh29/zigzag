import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}
  FindByLocationName(name: string): Observable<any> {
    return this.http
      .get<any>(
        `https://efastatic.vvs.de/umweltrechner/XML_STOPFINDER_REQUEST?outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&type_sf=any&version=10.2.10.139&name_sf=${name}`
      )
      .pipe(
        map((res) => {
          return res.locations;
        })
      );
  }
}
