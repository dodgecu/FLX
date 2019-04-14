import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInstanceComponent } from './employee-instance.component';

describe('EmployeeInstanceComponent', () => {
  let component: EmployeeInstanceComponent;
  let fixture: ComponentFixture<EmployeeInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
