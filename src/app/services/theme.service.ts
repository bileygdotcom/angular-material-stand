import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDark = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.setDark(true, false);
    }
  }

  toggle() {
    this.setDark(!this.isDark);
  }

  setDark(dark: boolean, save = true) {
    this.isDark = dark;
    if (save) {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    const lightLink = this.document.getElementById('light-theme') as HTMLLinkElement;
    const darkLink = this.document.getElementById('dark-theme') as HTMLLinkElement;

    if (lightLink && darkLink) {
      lightLink.disabled = dark;
      darkLink.disabled = !dark;
    }
  }
}