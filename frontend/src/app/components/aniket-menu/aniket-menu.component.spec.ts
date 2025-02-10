import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniketMenuComponent } from './aniket-menu.component';

describe('AniketMenuComponent', () => {
  let component: AniketMenuComponent;
  let fixture: ComponentFixture<AniketMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniketMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniketMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
