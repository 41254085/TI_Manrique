import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APlogoComponent } from './aplogo.component';

describe('APlogoComponent', () => {
  let component: APlogoComponent;
  let fixture: ComponentFixture<APlogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APlogoComponent]
    });
    fixture = TestBed.createComponent(APlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
