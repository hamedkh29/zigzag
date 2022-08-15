import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxComponent ],
      imports:[NgxSkeletonLoaderModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
