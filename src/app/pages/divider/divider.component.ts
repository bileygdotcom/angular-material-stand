import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [MatDividerModule, MatListModule],
  templateUrl: './divider.component.html',
})
export class DividerComponent {}