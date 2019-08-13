import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaydealComponent } from './daydeal.component';

describe('DaydealComponent', () => {
  let component: DaydealComponent;
  let fixture: ComponentFixture<DaydealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaydealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaydealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
