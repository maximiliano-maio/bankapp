import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashedChecksComponent } from './cashed-checks.component';

describe('CashedChecksComponent', () => {
  let component: CashedChecksComponent;
  let fixture: ComponentFixture<CashedChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashedChecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashedChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
