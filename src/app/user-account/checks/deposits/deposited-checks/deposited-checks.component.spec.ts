import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositedChecksComponent } from './deposited-checks.component';

describe('DepositedChecksComponent', () => {
  let component: DepositedChecksComponent;
  let fixture: ComponentFixture<DepositedChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositedChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositedChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
