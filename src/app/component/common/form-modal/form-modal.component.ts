import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { SportService } from 'src/app/sport.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent {
  updateId: any = null;
  sportValue: string = '';
  constructor(
    private sportservice: SportService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    let { id, ...rest } = this.data.editData;
    this.updateId = id;
    this.sportValue = rest.sport;
  }

  onSubmit(form: NgForm) {
    if (this.updateId) {
      this.sportservice.updateSport(this.updateId, form.value);
      this.updateId = null;
    } else {
      this.sportservice.addNewSport(form.value);
    }
    this.dialog.closeAll();
  }
}
