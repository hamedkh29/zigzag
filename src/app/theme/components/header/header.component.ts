import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpen: boolean = false;
  @Output() onToggleMenu = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.onToggleMenu.emit(!this.isMenuOpen)
  }
}
