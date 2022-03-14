import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankHomeComponent } from './bank-home.component';

describe('BankHomeComponent', () => {
  let component: BankHomeComponent;
  let fixture: ComponentFixture<BankHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
