import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../aniket-models/menu_items.type';

@Component({
  selector: 'app-aniket-menu',
  imports: [],
  templateUrl: './aniket-menu.component.html',
  styleUrl: './aniket-menu.component.css'
})
export class AniketMenuComponent implements OnInit{
    menuService = inject(MenuService);
    menuItems = signal<Array<MenuItem>>([])
    ngOnInit(): void {
      this.menuItems.set(this.menuService.menuItems)
    }
}