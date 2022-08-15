import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBoxComponent } from './route-box.component';
import {ThemeModule} from "../../../../theme/theme.module";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('RouteBoxComponent', () => {
  let component: RouteBoxComponent;
  let fixture: ComponentFixture<RouteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBoxComponent ],
      imports:[
        ThemeModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
