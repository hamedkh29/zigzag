import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ResultPageComponent} from "./components/result-page/result-page.component";
import {ThemeModule} from "../../theme/theme.module";
import {ResultRoutingModule} from "./result-routing.module";
import {MatCard, MatCardModule} from "@angular/material/card";
import { BoxComponent } from './components/box/box.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MeterToKilometerPipe} from "../../pipes/meter-to-kilometer.pipe";
import {SharedModule} from "../../common/sharedModule";
import { TopModesComponent } from './components/top-modes/top-modes.component';



@NgModule({
  declarations: [
    ResultPageComponent,
    BoxComponent,
    TopModesComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ResultRoutingModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    SharedModule,
  ],
  providers:[DatePipe]
})
export class ResultModule { }
