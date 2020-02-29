/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatePollingComponent } from './state-polling.component';

describe('StateComponent', () => {
  let component: StatePollingComponent;
  let fixture: ComponentFixture<StatePollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
