import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlsMovementsComponent } from './ils-movements.component';

describe('IlsMovementsComponent', () => {
  let component: IlsMovementsComponent;
  let fixture: ComponentFixture<IlsMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlsMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlsMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
