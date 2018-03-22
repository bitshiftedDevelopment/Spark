import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohDemoComponent } from './toh-demo.component';

describe('TohDemoComponent', () => {
  let component: TohDemoComponent;
  let fixture: ComponentFixture<TohDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
