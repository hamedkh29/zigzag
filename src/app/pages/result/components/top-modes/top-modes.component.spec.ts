import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopModesComponent } from './top-modes.component';

describe('TopModesComponent', () => {
  let component: TopModesComponent;
  let fixture: ComponentFixture<TopModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopModesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
