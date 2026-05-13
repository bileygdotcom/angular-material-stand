import { Component, Inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-example',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bottom-sheet-example.component.html',
  styleUrl: './bottom-sheet-example.component.css'
})
export class BottomSheetExampleComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}