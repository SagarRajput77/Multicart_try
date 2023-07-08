import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vegi1Component } from './vegi1.component';

describe('Vegi1Component', () => {
  let component: Vegi1Component;
  let fixture: ComponentFixture<Vegi1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Vegi1Component]
    });
    fixture = TestBed.createComponent(Vegi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
