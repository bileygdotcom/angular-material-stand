import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetExampleComponent } from './bottom-sheet-example.component';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css'
})
export class BottomSheetComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetExampleComponent);
  }
}