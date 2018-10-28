import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCustomComponent } from './weather-custom.component';

describe('WeatherCustomComponent', () => {
  let component: WeatherCustomComponent;
  let fixture: ComponentFixture<WeatherCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
