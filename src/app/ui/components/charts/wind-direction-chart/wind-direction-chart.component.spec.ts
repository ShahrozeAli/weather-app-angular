import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionChartComponent } from './wind-direction-chart.component';

describe('WindDirectionChartComponent', () => {
  let component: WindDirectionChartComponent;
  let fixture: ComponentFixture<WindDirectionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindDirectionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindDirectionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
