import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  constructor(
    public dialogRef: MatDialogRef<ModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {
    console.log(this.data)
  }

  onSave() {
    // You can modify the data as needed
    this.data.newValue = 'Updated Value';
    

    // Return the modified data to the parent component
    this.dialogRef.close(this.data);
  }
}
