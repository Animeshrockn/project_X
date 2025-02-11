import { Component, signal } from '@angular/core';
import { AniketMenuComponent } from '../aniket-menu/aniket-menu.component';
import { AnimeshHomeComponent } from '../animesh-home/animesh-home.component';
import { AniketCounterComponent } from '../aniket-counter/aniket-counter.component';

@Component({
  selector: 'app-aniket-home',
  imports: [AniketMenuComponent, AniketCounterComponent],
  templateUrl: './aniket-home.component.html',
  styleUrl: './aniket-home.component.css'
})
export class AniketHomeComponent {
  homeMessage = signal("Daal Makhni")

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`)
  }
}
