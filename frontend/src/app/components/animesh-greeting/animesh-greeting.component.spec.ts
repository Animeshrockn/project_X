import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshGreetingComponent } from './animesh-greeting.component';

describe('AnimeshGreetingComponent', () => {
  let component: AnimeshGreetingComponent;
  let fixture: ComponentFixture<AnimeshGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeshGreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeshGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
