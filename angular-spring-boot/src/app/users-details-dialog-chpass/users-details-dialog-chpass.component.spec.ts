import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsDialogChpassComponent } from './users-details-dialog-chpass.component';

describe('UsersDetailsDialogChpassComponent', () => {
  let component: UsersDetailsDialogChpassComponent;
  let fixture: ComponentFixture<UsersDetailsDialogChpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsDialogChpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailsDialogChpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
