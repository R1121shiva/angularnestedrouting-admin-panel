import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: any;
  modal: any = { title: '' };
  list: any = [];
  editable_id: any = null;
  errorMessage : string ="";
  titles : string = "jhone Doe"
  constructor(private authservice: AuthService , private title:Title) {}

  ngOnInit() {
    this.title.setTitle("normal crud operation");
    this.data = this.authservice.getCount();
    this.list;
  }

  increment() {
    this.authservice.incrementCount();
    this.data = this.authservice.getCount();
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
    if (i >= 0 && i < this.list.length) {
      let current_object = this.list[i-1];
      this.editable_id = i;
      this.modal = {
        title: current_object.title,
      };
    }
  }

  handleDelete(i: any) {
    console.log(i);
    this.list.splice(i - 1, 1);
  }
}
