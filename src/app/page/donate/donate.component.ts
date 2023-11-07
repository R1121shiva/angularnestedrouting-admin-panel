import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from 'src/app/component/common/form-modal/form-modal.component';
import { SportService } from 'src/app/sport.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  data: any;
  modal: any = { title: '' };
  list: any = [];
  editable_id: any = null;
  editableData :any;
  errorMessage : string ="";
  constructor(private sportservice : SportService , private dialog : MatDialog) {}

  ngOnInit() {
    this.list = this.sportservice.getAllSport()
  }


  save() {
    if (this.modal.title === '' || this.modal.title === null) {
        this.errorMessage = "required";
    } else {
      this.errorMessage = "";
      if (this.editable_id) {
        this.list.splice(this.editable_id-1, 1, this.modal);
        this.editable_id = null;
      } else {
        this.list.push(this.modal);
      }
      this.modal = { title: '' };
    }
  }

  handleEdit(i: number) {
    this.editableData = this.sportservice.EditSport(i);
    this.dialog.open(FormModalComponent, {
      data: {
        editData:this.editableData,
        key: 'edit',
      },
    });
  }

  handleDelete(i: any) {
   this.sportservice.deleteSport(i)
  }

  openModel(){
    this.dialog.open(FormModalComponent);
  }
}
