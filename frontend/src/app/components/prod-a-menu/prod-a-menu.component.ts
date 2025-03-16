import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdAHeaderComponent } from '../prod-a-header/prod-a-header.component';
import { ProdAReservationComponent } from '../prod-a-reservation/prod-a-reservation.component';

@Component({
  selector: 'app-prod-a-menu',
  imports: [ ProdAHeaderComponent, ProdAHeaderComponent, RouterLink, ProdAReservationComponent],
  templateUrl: './prod-a-menu.component.html',
  styleUrl: './prod-a-menu.component.css'
})
export class ProdAMenuComponent {

}
