import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesadnoinfoComponent } from './besadnoinfo.component';

describe('BesadnoinfoComponent', () => {
  let component: BesadnoinfoComponent;
  let fixture: ComponentFixture<BesadnoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesadnoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesadnoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
