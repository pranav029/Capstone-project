import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundItemCardComponent } from './ground-item-card.component';

describe('GroundItemCardComponent', () => {
  let component: GroundItemCardComponent;
  let fixture: ComponentFixture<GroundItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
