import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsDialogEditComponent } from './users-details-dialog-edit.component';

describe('UsersDetailsDialogEditComponent', () => {
  let component: UsersDetailsDialogEditComponent;
  let fixture: ComponentFixture<UsersDetailsDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailsDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
