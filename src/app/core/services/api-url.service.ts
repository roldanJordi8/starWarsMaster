import { Injectable, Inject, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');
export const API_URL_INDEX = new InjectionToken<string>('apiUrlIndex');

@Injectable({ providedIn: 'root' })
export class ApiUrlService {
  apiUrl: string;
  constructor(@Inject(API_URL) apiUrl: string, @Inject(API_URL_INDEX) apiUrlIndex: string) {
    if (apiUrl === 'USE_INDEX') {
      this.apiUrl = apiUrlIndex;
    } else {
      this.apiUrl = apiUrl;
    }
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
