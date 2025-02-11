import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-aniket-menu',
  imports: [],
  templateUrl: './aniket-menu.component.html',
  styleUrl: './aniket-menu.component.css'
})
export class AniketMenuComponent {
  title = signal("Restaurant Menu")
  message = input('Menu Items')
}