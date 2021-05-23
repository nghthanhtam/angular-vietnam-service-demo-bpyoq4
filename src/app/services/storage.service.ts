import { Injectable } from '@angular/core';
export enum STORAGE_KEYS {
  TOKEN = 'token',
  USER = 'user'
}

@Injectable({ providedIn: 'root' })
export class StorageService {
  get<T = any>(key: STORAGE_KEYS): T {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value) as T;
    } catch (e) {
      return value as any;
    }
  }

  set(key: STORAGE_KEYS, value: any) {
    localStorage.setItem(key, value ? JSON.stringify(value) : null);
  }

  remove(key: STORAGE_KEYS) {
    localStorage.removeItem(key);
  }
}
