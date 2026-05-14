import {ChangeDetectionStrategy, Component} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

/** @title Timepicker validation */
@Component({
  selector: 'timepicker-example',
  templateUrl: 'timepicker.component.html',
  styleUrl: './timepicker.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule, ReactiveFormsModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimepickerComponent {
  formControl = new FormControl<Date | null>(null);
}
