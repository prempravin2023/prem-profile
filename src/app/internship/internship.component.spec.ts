import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INTERNSHIPComponent } from './internship.component';

describe('INTERNSHIPComponent', () => {
  let component: INTERNSHIPComponent;
  let fixture: ComponentFixture<INTERNSHIPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [INTERNSHIPComponent]
    });
    fixture = TestBed.createComponent(INTERNSHIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
