import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardheader',
  templateUrl: './cardheader.component.html',
  styleUrls: ['./cardheader.component.css']
})
export class CardheaderComponent {
  @Input() data:any;
  constructor(){
    console.log(this.data)
  }
}
