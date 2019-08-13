import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcccComponent } from './cccc.component';

describe('CcccComponent', () => {
  let component: CcccComponent;
  let fixture: ComponentFixture<CcccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
