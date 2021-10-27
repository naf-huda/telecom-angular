import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansComponentComponent } from './plans-component.component';

describe('PlansComponentComponent', () => {
  let component: PlansComponentComponent;
  let fixture: ComponentFixture<PlansComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
