import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundCompleteDetailComponent } from './ground-complete-detail.component';

describe('GroundCompleteDetailComponent', () => {
  let component: GroundCompleteDetailComponent;
  let fixture: ComponentFixture<GroundCompleteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundCompleteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundCompleteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
