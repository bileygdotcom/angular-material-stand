import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'radio-button',
  templateUrl: 'radio-button.component.html',
  styleUrl: 'radio-button.component.css',
  imports: [MatRadioModule, FormsModule],
})
export class RadiobuttonComponent {
  favoriteSeason = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
