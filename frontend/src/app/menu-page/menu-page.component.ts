import { Component, signal } from '@angular/core';
import { AniketMenuComponent } from '../components/aniket-menu/aniket-menu.component';
import { AniketCounterComponent } from '../components/aniket-counter/aniket-counter.component';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-page',
  imports: [AniketMenuComponent, AniketCounterComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`)
  }
}
