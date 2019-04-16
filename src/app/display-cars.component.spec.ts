import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarsComponent } from './display-cars.component';

describe('DisplayCarsComponent', () => {
  let component: DisplayCarsComponent;
  let fixture: ComponentFixture<DisplayCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
