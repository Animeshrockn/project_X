import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniketHomeComponent } from './aniket-home.component';

describe('AniketHomeComponent', () => {
  let component: AniketHomeComponent;
  let fixture: ComponentFixture<AniketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniketHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
