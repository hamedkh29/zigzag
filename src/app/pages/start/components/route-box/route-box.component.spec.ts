import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBoxComponent } from './route-box.component';

describe('RouteBoxComponent', () => {
  let component: RouteBoxComponent;
  let fixture: ComponentFixture<RouteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBoxComponent ]
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
