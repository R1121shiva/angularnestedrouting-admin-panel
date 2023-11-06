import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.css'],
})
export class AccountsettingComponent {
  currentHide : boolean = true;
  newHide : boolean = true;
  confirmHide : boolean = true;
  image: string = '';
  bioValue: string =
    'The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery experiences.';
  gender: string[] = ['male', 'female', 'Other'];
  language: any = [
    { id: 1, label: 'English', value: 'eng' },
    { id: 2, label: 'American', value: 'am' },
    { id: 3, label: 'other', value: 'other' },
  ];
  country: any = [
    { id: 1, label: 'USA', value: 'usa' },
    { id: 1, label: 'UK', value: 'uk' },
    { id: 1, label: 'Australiya', value: 'australiya' },
    { id: 1, label: 'Germany', value: 'germany' },
    { id: 1, label: 'Nepal', value: 'Nepal' },
  ];

  signin: FormGroup = new FormGroup({
    currentPassword: new FormControl('', [Validators.required, Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.min(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(3)]),

  });

  get currentPassword() {
    return this.signin.get('currentPassword');
  }
  get newPassword() {
    return this.signin.get('newPassword');
  }
  get confirmPassword() {
    return this.signin.get('confirmPassword');
  }

  constructor() {}
  ngOnInit() {}

  saveChanges(){
    console.log(this.signin.value)
  }
}
