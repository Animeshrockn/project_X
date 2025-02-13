import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshComponent } from './animesh.component';

describe('AnimeshComponent', () => {
  let component: AnimeshComponent;
  let fixture: ComponentFixture<AnimeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
