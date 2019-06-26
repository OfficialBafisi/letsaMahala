import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { AuthenticationService } from '../../providers/authentication.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private authService: AuthenticationService
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    console.log("LOGIN CALL");
    if (form.valid) {
      // this.userData.login(this.login.username);
      this.authService.loginUser(form.value)
      .then(results => {
        this.router.navigateByUrl('/app/tabs/schedule');
      },
      error=> {
        console.log(error);
      })
      
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
