import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prod-a-header',
  imports: [RouterLink],
  templateUrl: './prod-a-header.component.html',
  styleUrl: './prod-a-header.component.css'
})
export class ProdAHeaderComponent {
  title = signal("app-prod-a-header-aboutus");
}
