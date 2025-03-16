import { Component , signal } from '@angular/core';
import { ProdAHeaderComponent } from '../prod-a-header/prod-a-header.component';
import { RouterLink } from '@angular/router';
import { ProdAReservationComponent } from '../prod-a-reservation/prod-a-reservation.component';

@Component({
  selector: 'app-prod-a-aboutus',
  imports: [ProdAHeaderComponent, ProdAReservationComponent, RouterLink],
  templateUrl: './prod-a-aboutus.component.html',
  styleUrl: './prod-a-aboutus.component.css'
})
export class ProdAAboutusComponent {
  title = signal("app-prod-a-header-aboutus");
}
