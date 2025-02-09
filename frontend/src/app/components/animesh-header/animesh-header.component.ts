import { Component, signal } from '@angular/core';
import { sign } from 'node:crypto';

@Component({
  selector: 'app-animesh-header',
  imports: [],
  templateUrl: './animesh-header.component.html',
  styleUrl: './animesh-header.component.css'
})
export class AnimeshHeaderComponent {
  title = signal("Project X")
}
