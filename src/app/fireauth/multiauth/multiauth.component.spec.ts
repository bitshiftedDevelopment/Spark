import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiauthComponent } from './multiauth.component';

describe('MultiauthComponent', () => {
  let component: MultiauthComponent;
  let fixture: ComponentFixture<MultiauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
