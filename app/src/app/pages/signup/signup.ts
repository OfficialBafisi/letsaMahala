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
  signup: UserOptions = { email: '', password: '' };
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
      // 
      this.authService.registerUser(form.value)
      .then(
        results=> {
          this.userData.signup(this.signup.email);
          this.router.navigateByUrl('/app/tabs/recent');
        },
        error=>{
          console.log(error);
        })
      
    }
  }
}
