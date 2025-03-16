import { Component, input } from '@angular/core';

@Component({
  selector: 'app-animesh-greeting',
  imports: [],
  templateUrl: './animesh-greeting.component.html',
  styleUrl: './animesh-greeting.component.css'
})
export class AnimeshGreetingComponent {
  message = input("Default : Hello Hello !!");
}
