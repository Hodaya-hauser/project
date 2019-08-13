import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyconnectComponent } from './buyconnect.component';

describe('BuyconnectComponent', () => {
  let component: BuyconnectComponent;
  let fixture: ComponentFixture<BuyconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
