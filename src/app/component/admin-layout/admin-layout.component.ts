import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
 constructor(private authservice : AuthService){

 }
 ngOnInit(){

 }
 logout(){
  this.authservice.userLogout()
  
 }
}
