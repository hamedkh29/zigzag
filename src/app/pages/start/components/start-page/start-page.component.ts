import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  slides = [
    'assets/images/header-slider-image-1.svg',
    'assets/images/header-slider-image-1.svg',
    'assets/images/header-slider-image-1.svg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
