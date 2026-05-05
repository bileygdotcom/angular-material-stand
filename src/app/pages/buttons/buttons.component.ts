import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-buttons',
  standalone: true,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
})
export class ButtonsComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
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
  }
}