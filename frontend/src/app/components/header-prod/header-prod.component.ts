import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-prod',
  imports: [RouterLink],
  templateUrl: './header-prod.component.html',
  styleUrl: './header-prod.component.css'
})
export class HeaderProdComponent {
  title = signal("Hello");
}
