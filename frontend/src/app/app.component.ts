import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeshHeaderComponent } from './components/animesh-header/animesh-header.component';
import { AnimeshHomeComponent } from './components/animesh-home/animesh-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimeshHeaderComponent, AnimeshHomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
