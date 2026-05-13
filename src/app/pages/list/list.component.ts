import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

/**
 * @title List with selection
 */
@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  imports: [MatListModule],
})
export class ListComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
