import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniketHeaderComponent } from './aniket-header.component';

describe('AniketHeaderComponent', () => {
  let component: AniketHeaderComponent;
  let fixture: ComponentFixture<AniketHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniketHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
