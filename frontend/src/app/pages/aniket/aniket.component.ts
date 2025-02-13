import { Component } from '@angular/core';
import { AniketMenuComponent } from '../../components/aniket-menu/aniket-menu.component';
import { AniketCounterComponent } from '../../components/aniket-counter/aniket-counter.component';

@Component({
  selector: 'app-aniket',
  imports: [AniketMenuComponent],
  templateUrl: './aniket.component.html',
  styleUrl: './aniket.component.css'
})
export class AniketComponent {

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`)
  }
}