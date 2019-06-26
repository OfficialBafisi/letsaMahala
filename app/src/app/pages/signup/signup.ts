import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AuthenticationService } from '../../providers/authentication.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private authService: AuthenticationService
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;
    console.log("REGISTER CALL");
    if (form.valid) {
      // this.userData.signup(this.signup.username);
      this.authService.registerUser(form.value)
      .then(
        results=> {
          this.router.navigateByUrl('/app/tabs/schedule');
        },
        error=>{
          console.log(error);
        })
      
    }
  }
}
