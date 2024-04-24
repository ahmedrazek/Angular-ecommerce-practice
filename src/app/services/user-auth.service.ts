import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private authSubject!: BehaviorSubject<boolean>;
  redirectUrl: string = '';
  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }
  login() {
    localStorage.setItem('token', 'asdascadasxasasx');
    this.authSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }

  getUseLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  getToken(): any {
    localStorage.getItem('token') ? localStorage.getItem('token') : ' ';
  }
  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authSubject;
  }
}
