import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogPage } from './call-log.page';

describe('CallLogPage', () => {
  let component: CallLogPage;
  let fixture: ComponentFixture<CallLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
