import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  modal: any = { title: '' };
  list: any = [];
  editable_id: any = null;
  errorMessage: string = '';
  editableObject: any;
  
  constructor(private testservice: TestService) {}

  ngOnInit() {
    this.list = this.testservice.getAllData();
    let { id, ...rest } = this.editableObject;
    this.editable_id = id;
    console.log(rest, this.editable_id);
    if (this.editable_id) {
      this.modal = {
        title: rest.title,
      };
    }
  }

  save() {
    if (this.modal.title === '' || this.modal.title === null) {
      this.errorMessage = 'required';
    } else {
      this.errorMessage = '';
      if (this.editable_id) {
        this.testservice.updateData(this.editable_id, this.modal);
        this.editable_id = null;
      } else {
        this.testservice.createData(this.modal);
      }
      this.modal = { title: '' };
    }
  }

  handleEdit(i: number) {
    this.editableObject = this.testservice.editData(i);
    this.ngOnInit();
  }

  handleDelete(i: any) {
    this.testservice.deleteData(i);
  }
}
