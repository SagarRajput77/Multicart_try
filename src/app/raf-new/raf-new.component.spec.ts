import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAFNEWComponent } from './raf-new.component';

describe('RAFNEWComponent', () => {
  let component: RAFNEWComponent;
  let fixture: ComponentFixture<RAFNEWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAFNEWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAFNEWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
