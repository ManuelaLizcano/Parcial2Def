/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CambiarListComponent } from './cambiar-list.component';

describe('CambiarListComponent', () => {
  let component: CambiarListComponent;
  let fixture: ComponentFixture<CambiarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
