import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundListComponentComponent } from './ground-list-component.component';

describe('GroundListComponentComponent', () => {
  let component: GroundListComponentComponent;
  let fixture: ComponentFixture<GroundListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
