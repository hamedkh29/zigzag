import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPageComponent } from './result-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ThemeModule} from "../../../../theme/theme.module";
import {DatePipe} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {TopModesComponent} from "../top-modes/top-modes.component";
import {BoxComponent} from "../box/box.component";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

describe('ResultPageComponent', () => {
  let component: ResultPageComponent;
  let fixture: ComponentFixture<ResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultPageComponent, TopModesComponent,BoxComponent ],
      imports:[
        ThemeModule,
        NgxSkeletonLoaderModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers:[DatePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
