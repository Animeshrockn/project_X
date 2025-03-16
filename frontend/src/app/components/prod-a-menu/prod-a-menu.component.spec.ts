import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAMenuComponent } from './prod-a-menu.component';

describe('ProdAMenuComponent', () => {
  let component: ProdAMenuComponent;
  let fixture: ComponentFixture<ProdAMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
