import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteinfoComponent } from './writeinfo.component';

describe('WriteinfoComponent', () => {
  let component: WriteinfoComponent;
  let fixture: ComponentFixture<WriteinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
