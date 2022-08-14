import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import {ThemeModule} from "../theme/theme.module";
import {PagesComponent} from "./pages.component";




@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,

  ]
})
export class PagesModule { }
