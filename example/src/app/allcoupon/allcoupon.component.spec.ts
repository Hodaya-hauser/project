import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcouponComponent } from './allcoupon.component';

describe('AllcouponComponent', () => {
  let component: AllcouponComponent;
  let fixture: ComponentFixture<AllcouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
