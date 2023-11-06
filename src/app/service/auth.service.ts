import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private count = 0;
  constructor(private router: Router) {}

  userLogout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  incrementCount() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}
