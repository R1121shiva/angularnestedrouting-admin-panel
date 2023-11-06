import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  data: any;
  modal:any = { title: '' };
  list : any = [];
  editable_id : any = null;
  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.data = this.authservice.getCount();
    this.list 
  }

  increment() {
    this.authservice.incrementCount();
    this.data = this.authservice.getCount();
  }

  save() {
    if(this.editable_id){
      console.log(this.editable_id)
      this.list.splice(this.editable_id,1,this.modal);
      this.editable_id = null;
    }else{
      this.list.push(this.modal);
    }
    this.modal = { title : ""}
    console.log(this.list)
  }

  handleEdit(i: number) {
    if (i >= 0 && i < this.list.length) {
      let current_object = this.list[i];
      this.editable_id = i;
      this.modal = {
        title: current_object.title
      };
    }
  }
  

  handleDelete(i:any){
    console.log(i)
    this.list.splice(i-1,1)
  }
}
