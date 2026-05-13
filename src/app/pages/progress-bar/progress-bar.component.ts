import {Component} from '@angular/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable progress-bar
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrl: 'progress-bar.component.css',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule],
})
export class ProgressbarComponent {
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
