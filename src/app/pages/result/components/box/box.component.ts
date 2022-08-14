import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() color: string = "";
  @Input() type: string = "";
  @Input() icon: string = "";
  @Input() weight: number | null | undefined = 0;
  @Input() isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
