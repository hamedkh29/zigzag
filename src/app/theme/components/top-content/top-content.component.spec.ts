import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContentComponent } from './top-content.component';
import {
  ChildrenOutletContexts,
  RouterModule,
  UrlSerializer,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopContentComponent', () => {
  let component: TopContentComponent;
  let fixture: ComponentFixture<TopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopContentComponent],
      providers: [],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
