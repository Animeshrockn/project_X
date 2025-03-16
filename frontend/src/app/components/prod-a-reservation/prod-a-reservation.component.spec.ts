import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAReservationComponent } from './prod-a-reservation.component';

describe('ProdAReservationComponent', () => {
  let component: ProdAReservationComponent;
  let fixture: ComponentFixture<ProdAReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
