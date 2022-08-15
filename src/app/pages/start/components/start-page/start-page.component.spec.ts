import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './start-page.component';
import { SlideBoxComponent } from '../slide-box/slide-box.component';
import {ThemeModule} from "../../../../theme/theme.module";
import {RouterTestingModule} from "@angular/router/testing";
import {StartModule} from "../../start.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouteBoxComponent} from "../route-box/route-box.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatCarouselModule} from "@ngbmodule/material-carousel";
import {MatCardModule} from "@angular/material/card";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPageComponent,SlideBoxComponent,RouteBoxComponent ],
      imports:[
        ThemeModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatCarouselModule,
        MatCardModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
