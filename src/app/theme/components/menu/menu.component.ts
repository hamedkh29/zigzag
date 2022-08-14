import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Output() onCloseMenu = new EventEmitter();

  constructor() { }
  onSidenavClick() {
    this.isMenuOpen = false;
    this.onCloseMenu.emit();
  }
  ngOnInit(): void {
  }

}
