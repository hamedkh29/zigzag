import { Component, OnInit } from '@angular/core';
import {
  concat,
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-route-box',
  templateUrl: './route-box.component.html',
  styleUrls: ['./route-box.component.scss'],
  providers: [LocationService],
})
export class RouteBoxComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}
  selectedSource: any;
  selectedDestination: any;
  sources$: Observable<any> = new Observable<any>();
  sourcesInput$ = new Subject<string>();
  destinations$: Observable<any> = new Observable<any>();
  destinationsInput$ = new Subject<string>();
  sourcesLoading: boolean = false;
  destinationLoading: boolean = false;

  ngOnInit(): void {
    //init with empty array
    this.loadSources();
    //init with empty array
    this.loadDestinations();
  }
  loadSources() {
    //lazy debounceTime to avoid performance issues
    this.sources$ = concat(
      of([]), // default items
      this.sourcesInput$.pipe(
        filter((res) => {
          return res !== null;
        }),
        distinctUntilChanged(),
        debounceTime(800),
        tap(() => (this.sourcesLoading = true)),
        switchMap((term) => {
          const res = this.locationService
            .findByLocationName(term)
            .pipe(tap(() => (this.sourcesLoading = false)));
          return res;
        })
      )
    );
  }
  loadDestinations() {
    //lazy debounceTime to avoid performance issues
    this.destinations$ = concat(
      of([]), // default items
      this.destinationsInput$.pipe(
        filter((res) => {
          return res !== null;
        }),
        distinctUntilChanged(),
        debounceTime(800),
        tap(() => (this.destinationLoading = true)),
        switchMap((term) => {
          const res = this.locationService
            .findByLocationName(term)
            .pipe(tap(() => (this.destinationLoading = false)));
          return res;
        })
      )
    );
  }
  exchange() {
    //exchange the current origin with the other one
    const temp = Object.assign({}, this.selectedSource);
    this.selectedSource = Object.assign(this.selectedDestination);
    this.selectedDestination = temp;
  }

  handleConfirm() {
    //navigate to the selected destination
    this.router.navigate([
      '/pages/result/' +
        this.selectedSource?.id +
        '/' +
        this.selectedDestination?.id,
    ]);
  }
}
