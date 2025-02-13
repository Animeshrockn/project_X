import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniketComponent } from './aniket.component';

describe('AniketComponent', () => {
  let component: AniketComponent;
  let fixture: ComponentFixture<AniketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
