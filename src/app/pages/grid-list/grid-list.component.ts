import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-list',
  styleUrl: 'grid-list.component.css',
  templateUrl: 'grid-list.component.html',
  imports: [MatGridListModule],
})
export class GridlistComponent {}
