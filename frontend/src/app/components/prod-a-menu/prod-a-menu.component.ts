import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdAHeaderComponent } from '../prod-a-header/prod-a-header.component';

@Component({
  selector: 'app-prod-a-menu',
  imports: [ ProdAHeaderComponent],
  templateUrl: './prod-a-menu.component.html',
  styleUrl: './prod-a-menu.component.css'
})
export class ProdAMenuComponent {

}
