import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshCalculatorComponent } from './animesh-calculator.component';

describe('AnimeshCalculatorComponent', () => {
  let component: AnimeshCalculatorComponent;
  let fixture: ComponentFixture<AnimeshCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeshCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeshCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
