import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaDetailsFormComponent } from './arena-details-form.component';

describe('ArenaDetailsFormComponent', () => {
  let component: ArenaDetailsFormComponent;
  let fixture: ComponentFixture<ArenaDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenaDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
