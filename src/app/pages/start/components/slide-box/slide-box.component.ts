import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-box',
  templateUrl: './slide-box.component.html',
  styleUrls: ['./slide-box.component.scss'],
})
export class SlideBoxComponent implements OnInit {
  /**
   * The list of slides
   */
  @Input() slides: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
