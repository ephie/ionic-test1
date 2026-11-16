import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}

// The Android emulator reaches the host machine via 10.0.2.2; web and iOS simulator use localhost.
const host = Capacitor.getPlatform() === 'android' ? '10.0.2.2' : 'localhost';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = `http://${host}:5183/api`;

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}/contacts`);
  }
}
