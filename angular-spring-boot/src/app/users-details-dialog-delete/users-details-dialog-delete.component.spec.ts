import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsDialogDeleteComponent } from './users-details-dialog-delete.component';

describe('UsersDetailsDialogDeleteComponent', () => {
  let component: UsersDetailsDialogDeleteComponent;
  let fixture: ComponentFixture<UsersDetailsDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailsDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
