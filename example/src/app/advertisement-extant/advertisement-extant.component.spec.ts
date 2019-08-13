import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementExtantComponent } from './advertisement-extant.component';

describe('AdvertisementExtantComponent', () => {
  let component: AdvertisementExtantComponent;
  let fixture: ComponentFixture<AdvertisementExtantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementExtantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementExtantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
