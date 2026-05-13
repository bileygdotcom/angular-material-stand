import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

/**
 * @title List variants
 */
@Component({
  selector: 'lines-list',
  templateUrl: 'lines-list.component.html',
  styleUrl: './lines-list.component.css',
  imports: [MatListModule],
})
export class LinesListComponent {}
