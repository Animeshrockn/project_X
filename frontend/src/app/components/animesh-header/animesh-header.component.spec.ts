import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeshHeaderComponent } from './animesh-header.component';

describe('AnimeshHeaderComponent', () => {
  let component: AnimeshHeaderComponent;
  let fixture: ComponentFixture<AnimeshHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeshHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeshHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
