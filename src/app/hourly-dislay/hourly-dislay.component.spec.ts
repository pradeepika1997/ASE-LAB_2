import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDislayComponent } from './hourly-dislay.component';

describe('HourlyDislayComponent', () => {
  let component: HourlyDislayComponent;
  let fixture: ComponentFixture<HourlyDislayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyDislayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDislayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
