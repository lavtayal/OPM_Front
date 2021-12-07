import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelieveriesComponent } from './delieveries.component';

describe('DelieveriesComponent', () => {
  let component: DelieveriesComponent;
  let fixture: ComponentFixture<DelieveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelieveriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelieveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
