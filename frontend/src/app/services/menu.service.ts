import { Injectable } from '@angular/core';
import { MenuItem } from '../components/model/menu_items.type';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: Array<MenuItem> = [{
    itemId: 0,
    available: true,
    itemName: "Daal Makhni",
    cost: 19
  },
  {
    itemId: 1,
    available: true,
    itemName: "Lachcha Paratha",
    cost: 10000
  }
]
  constructor() { }
}
