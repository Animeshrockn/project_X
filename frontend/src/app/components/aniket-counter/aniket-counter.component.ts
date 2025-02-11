import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-aniket-counter',
  imports: [],
  templateUrl: './aniket-counter.component.html',
  styleUrl: './aniket-counter.component.css'
})
export class AniketCounterComponent {
  counterValue = signal(0)
  increment(){
    this.counterValue.update((val) => val+1)
  }
  decrement() {
    this.counterValue.update((val) => val-1)
  }
  reset() {
    this.counterValue.set(0)
  }
}
