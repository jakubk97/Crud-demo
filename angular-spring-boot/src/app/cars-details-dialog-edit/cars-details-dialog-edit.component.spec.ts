import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDetailsDialogEditComponent } from './cars-details-dialog-edit.component';

describe('CarsDetailsDialogEditComponent', () => {
  let component: CarsDetailsDialogEditComponent;
  let fixture: ComponentFixture<CarsDetailsDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsDetailsDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDetailsDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
