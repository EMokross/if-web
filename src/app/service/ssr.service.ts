import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SsrService {

  private _isBrowser: boolean;

  get isBrowser(): boolean {
    return this._isBrowser;
  }

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this._isBrowser = isPlatformBrowser(platformId);
  }
}
