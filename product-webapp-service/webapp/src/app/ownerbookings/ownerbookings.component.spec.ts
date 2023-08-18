import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerbookingsComponent } from './ownerbookings.component';

describe('OwnerbookingsComponent', () => {
  let component: OwnerbookingsComponent;
  let fixture: ComponentFixture<OwnerbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerbookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
