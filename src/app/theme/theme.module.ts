import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { TopContentComponent } from './components/top-content/top-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    TopContentComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    TopContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ThemeModule { }
