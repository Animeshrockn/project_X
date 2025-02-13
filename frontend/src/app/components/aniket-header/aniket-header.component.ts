import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aniket-header',
  imports: [RouterLink],
  templateUrl: './aniket-header.component.html',
  styleUrl: './aniket-header.component.css'
})
export class AniketHeaderComponent {
  title = signal("Restaurant Home")
}
