import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupcomponentComponent } from './singupcomponent.component';

describe('SingupcomponentComponent', () => {
  let component: SingupcomponentComponent;
  let fixture: ComponentFixture<SingupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
