import { Component, signal } from '@angular/core';
import { AnimeshGreetingComponent } from '../animesh-greeting/animesh-greeting.component';
import { AnimeshCalculatorComponent } from '../animesh-calculator/animesh-calculator.component';

@Component({
  selector: 'app-animesh-home',
  imports: [AnimeshGreetingComponent, AnimeshCalculatorComponent],
  templateUrl: './animesh-home.component.html',
  styleUrl: './animesh-home.component.css'
})
export class AnimeshHomeComponent {
  homeMessage = signal("Hello World from Home Component")

  keyUpHandler(event : KeyboardEvent){
    console.log(`User has pressed : ${event.key} key`);
  }
}
