import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModelComponent } from 'src/app/component/common/model/model.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  modal: any = { sport: '' };
  list: any = [];
  editable_id: any = null;
  errorMessage: string = '';
  editableObject: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      this.list = JSON.parse(storedData);
    }
  }

  save() {
    this.list = this.list || [];
    if (this.modal === "" || this.modal === null) {
      this.errorMessage = "Required!";
    } else {
      if (this.editable_id) {
        this.list.splice(this.editable_id - 1, 1, this.modal);
        this.dialog.open(ModelComponent, {
          data: {
            message: 'Update Data successfully',
            key: 'success',
          },
        });
        this.editable_id = null;
        localStorage.setItem('data', JSON.stringify(this.list));
      } else {
        this.list.push(this.modal);
        this.dialog.open(ModelComponent, {
          data: {
            message: 'Create Data successfully',
            key: 'success',
          },
        });
        localStorage.setItem('data', JSON.stringify(this.list));
      }
    }
    this.modal = { sport: '' };
  }
  

  handleEdit(i: number) {
    this.editableObject = this.list[i - 1];
    this.editable_id = i;
    this.modal = {
      sport: this.editableObject.sport,
    };
  }

  handleDelete(i: any) {
    this.list.splice(i - 1, 1);
    this.dialog.open(ModelComponent, {
      data: {
        message: 'Delete Data successfully',
        key: 'del-success',
      },
    });
    localStorage.setItem('data', JSON.stringify(this.list));

  }
}
