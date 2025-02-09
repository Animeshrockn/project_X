import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private API_URL = 'http://127.0.0.1:5000/api/data';

  async getData() {
    const response = await axios.get(this.API_URL);
    return response.data;
  }

  async addData(newData: any) {
    const response = await axios.post(this.API_URL, newData);
    return response.data;
  }
}



