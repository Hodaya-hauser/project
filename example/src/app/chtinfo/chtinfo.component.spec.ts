import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtinfoComponent } from './chtinfo.component';

describe('ChtinfoComponent', () => {
  let component: ChtinfoComponent;
  let fixture: ComponentFixture<ChtinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
