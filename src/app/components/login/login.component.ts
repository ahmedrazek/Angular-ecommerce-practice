import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUserLogged: boolean;
  constructor(
    private userAuthSer: UserAuthService,
    private Location: Location,
    private router: Router
  ) {
    this.isUserLogged = this.userAuthSer.getUseLogged();
  }

  login() {
    this.userAuthSer.login();
    this.isUserLogged = this.userAuthSer.getUseLogged();
    const redirectUrl = this.userAuthSer.redirectUrl
      ? this.userAuthSer.redirectUrl
      : '/home';
    this.router.navigate([redirectUrl]);
  }
  logout() {
    this.userAuthSer.logout();
    this.isUserLogged = this.userAuthSer.getUseLogged();
  }
}
