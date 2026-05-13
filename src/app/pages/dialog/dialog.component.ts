import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent,
    {
        autoFocus: 'dialog',
        restoreFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}