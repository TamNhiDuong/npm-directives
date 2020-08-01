import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFieldErrorsComponent } from './ngx-field-errors.component';

describe('NgxFieldErrorsComponent', () => {
  let component: NgxFieldErrorsComponent;
  let fixture: ComponentFixture<NgxFieldErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFieldErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFieldErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});