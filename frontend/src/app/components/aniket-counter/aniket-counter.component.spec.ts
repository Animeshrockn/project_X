import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniketCounterComponent } from './aniket-counter.component';

describe('AniketCounterComponent', () => {
  let component: AniketCounterComponent;
  let fixture: ComponentFixture<AniketCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniketCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
