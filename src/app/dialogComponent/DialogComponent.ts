import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./DialogCss.css']
})
export class DialogComponent {


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      if (this.data.onOk) {
        this.data.onOk();
      }
      this.dialogRef.close();
    }

  onYesClick() {
    this.dialogRef.close();
  }

}

export interface DialogData {
  message: string;
  onOk?: () => void;
}
