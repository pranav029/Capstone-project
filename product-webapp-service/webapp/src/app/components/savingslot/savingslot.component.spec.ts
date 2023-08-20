import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingslotComponent } from './savingslot.component';

describe('SavingslotComponent', () => {
  let component: SavingslotComponent;
  let fixture: ComponentFixture<SavingslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
