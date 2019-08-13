import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyShowCouponComponent } from './buy-show-coupon.component';

describe('BuyShowCouponComponent', () => {
  let component: BuyShowCouponComponent;
  let fixture: ComponentFixture<BuyShowCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyShowCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyShowCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
