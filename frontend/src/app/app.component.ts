import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderProdComponent } from './components/header-prod/header-prod.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderProdComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
