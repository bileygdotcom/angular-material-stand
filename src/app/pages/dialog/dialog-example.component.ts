import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'custom-folderProject',
      this.sanitizer.bypassSecurityTrustResourceUrl('icons/folderProject-16.svg')
  );
}

  close() {
    this.dialogRef.close();
  }
}