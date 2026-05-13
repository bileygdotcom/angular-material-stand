import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

/** @title Datepicker action buttons */
@Component({
  selector: 'datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrl: 'datepicker.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {}
