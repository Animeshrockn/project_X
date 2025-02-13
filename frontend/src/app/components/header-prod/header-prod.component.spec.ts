import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProdComponent } from './header-prod.component';

describe('HeaderProdComponent', () => {
  let component: HeaderProdComponent;
  let fixture: ComponentFixture<HeaderProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
