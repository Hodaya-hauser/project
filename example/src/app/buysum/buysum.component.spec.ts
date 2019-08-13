import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysumComponent } from './buysum.component';

describe('BuysumComponent', () => {
  let component: BuysumComponent;
  let fixture: ComponentFixture<BuysumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuysumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuysumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
