import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxComponent],
      imports: [NgxSkeletonLoaderModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should switch color to the primary color', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.color = 'primary';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.zigzag-card')?.className).toContain(
      'primary-card'
    );
  });
  it('should display ngx loaders if isLoading = true', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.isLoading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ngx-skeleton-loader')).toBeTruthy();
  });
  it('should display icon if isLoading = false and has icon', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.icon = 'bus';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.zigzag-icon img')).toBeTruthy();
  });
  it('should display type if isLoading = false and has type', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.type = 'bus';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.type-container span')).toBeTruthy();
  });
  it('should display weight if isLoading = false and has weight', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.weight = 20;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.weight-container span')).toBeTruthy();
  });
  it('should display 20 kg if isLoading = false and weight = 20', () => {
    const fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    component.isLoading = false;
    component.weight = 20;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.weight-container span')?.textContent
    ).toEqual(' 20 kg ');
  });
});
