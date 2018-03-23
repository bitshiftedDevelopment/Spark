import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredbComponent } from './firedb.component';

describe('FiredbComponent', () => {
  let component: FiredbComponent;
  let fixture: ComponentFixture<FiredbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiredbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiredbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
