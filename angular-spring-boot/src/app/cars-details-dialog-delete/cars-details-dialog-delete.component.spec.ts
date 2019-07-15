import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailsDialogDeleteComponent } from './cars-details-dialog-delete.component';

describe('CarsDetailsDialogDeleteComponent', () => {
  let component: CarsDetailsDialogDeleteComponent;
  let fixture: ComponentFixture<CarsDetailsDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsDetailsDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDetailsDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
