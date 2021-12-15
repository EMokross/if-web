import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get(key: string): string | null {
    if (!this.isBrowser)
      return null;

    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    if (!this.isBrowser)
      return;
    
    localStorage.setItem(key, value);
  }

  remove(...keys: string[]) {
    if (!this.isBrowser)
      return;

    keys.forEach(key => localStorage.removeItem(key));
  }
}
