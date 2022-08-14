import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-modes',
  templateUrl: './top-modes.component.html',
  styleUrls: ['./top-modes.component.scss']
})
export class TopModesComponent implements OnInit {
  @Input() autoDistance: number | null | undefined = 0;
  @Input() publicTransportDistance: number | null | undefined = 0;
  @Input() isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
