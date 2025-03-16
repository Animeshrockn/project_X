import { Injectable } from '@angular/core';
import { MenuItem } from '../components/aniket-models/menu_items.type';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://127.0.0.1:5000/api/menu_items'; // Replace with actual backend URL

  constructor(private http: HttpClient) {}

  // Fetch menu items from backend
  getMenuItems(): Promise<MenuItem[]> {
    return firstValueFrom(this.http.get<MenuItem[]>(this.apiUrl));
  }
}