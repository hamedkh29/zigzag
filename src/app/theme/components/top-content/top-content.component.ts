import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss'],
})
export class TopContentComponent implements OnInit {
  @Input() map: { title: string; link: string } = {
    title: 'Some -> Current',
    link: '#',
  };
  @Input() title: string = 'title';
  constructor() {}

  ngOnInit(): void {}
}
