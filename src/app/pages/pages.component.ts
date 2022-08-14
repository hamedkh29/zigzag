import {Component, NgZone} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'ngx-pages',
  template: `
    <div class="page-container">
      <app-header [isMenuOpen]="isMenuOpen" (onToggleMenu)="handleToggleMenu($event)"></app-header>
      <app-menu [isMenuOpen]="isMenuOpen" (onCloseMenu)="isMenuOpen = false">
        <main>
          <router-outlet></router-outlet>
        </main>
      </app-menu>
    </div>
  `,
  providers: [],
})
export class PagesComponent {
  isMenuOpen: boolean = false;

  constructor(){
  }

  handleToggleMenu(e: boolean) {
    this.isMenuOpen = e;
  }
}
