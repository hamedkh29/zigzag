import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './components/start-page/start-page.component';
import {StartRoutingModule} from "./start-routing.module";
import {ThemeModule} from "../../theme/theme.module";
import { SlideBoxComponent } from './components/slide-box/slide-box.component';
import { RouteBoxComponent } from './components/route-box/route-box.component';
import {MatCardModule} from "@angular/material/card";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {MatButtonModule} from "@angular/material/button";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    StartPageComponent,
    SlideBoxComponent,
    RouteBoxComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    ThemeModule,
    MatCarouselModule,
    MatCardModule,
    MatButtonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class StartModule { }
