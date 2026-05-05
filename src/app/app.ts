import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class App {
  constructor(
    private iconRegistry: MatIconRegistry,
    public themeService: ThemeService,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'custom-favorite',
      this.sanitizer.bypassSecurityTrustResourceUrl('icons/favorite24.svg')
    );
    this.iconRegistry.addSvgIcon(
      'custom-searchSet',
      this.sanitizer.bypassSecurityTrustResourceUrl('icons/searchSet.svg')
    );
    this.iconRegistry.addSvgIcon(
      'custom-folderProject',
      this.sanitizer.bypassSecurityTrustResourceUrl('icons/folderProject-16.svg')
    );
  }
  // Геттер для иконки темы
  get themeIcon(): string {
    return this.themeService.isDark ? 'light_mode' : 'dark_mode';
  }
  toggleTheme() {
    this.themeService.toggle();
  }
}