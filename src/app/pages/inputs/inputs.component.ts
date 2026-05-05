import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  standalone: true,
  styleUrl: './inputs.component.css',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputComponent {}
