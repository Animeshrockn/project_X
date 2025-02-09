import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshHomeComponent } from './animesh-home.component';

describe('AnimeshHomeComponent', () => {
  let component: AnimeshHomeComponent;
  let fixture: ComponentFixture<AnimeshHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeshHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeshHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
