import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  count = 0;

  constructor() {
    // console.log('contrutor 1');
  }
  ngOnChanges() {
    // console.log('ngOnChanges 2');
  }
  ngOnInit() {
    this.count;
    // console.log('ngOnInit 3');
  }
  ngDoCheck() {
    // console.log('ngDoCheck 4');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit 5');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked 6');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit 7');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked 8');
  }
  ngOnDestroy() {
    // console.log('ngOnDestroy 9');
  }
  increment() {
    this.count = this.count + 1;
  }
}
