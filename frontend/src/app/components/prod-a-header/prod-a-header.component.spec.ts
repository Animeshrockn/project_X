import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAHeaderComponent } from './prod-a-header.component';

describe('ProdAHeaderComponent', () => {
  let component: ProdAHeaderComponent;
  let fixture: ComponentFixture<ProdAHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
