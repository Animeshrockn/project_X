import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdALocationComponent } from './prod-a-location.component';

describe('ProdALocationComponent', () => {
  let component: ProdALocationComponent;
  let fixture: ComponentFixture<ProdALocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdALocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdALocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
