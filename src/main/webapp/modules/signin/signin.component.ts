import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+.[a-zA-Z0-9]*$/;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public key: string;
  public password: string;
  signInForm: FormGroup;
  constructor(
    private router: Router,
    private  fb: FormBuilder ) {
    this.signInForm = fb.group({
      'userEmail' : [null, Validators.compose([Validators.pattern(EMAIL_REGEX), Validators.required])],
      'userPassword': [null, Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
  }
  signIn(value) {
    let flag = 0;
    for(var i=0, len = localStorage.length; i<len; i++ ) {
      this.key = localStorage.key(i);      
      let password = JSON.parse(localStorage.getItem(this.key));
      this.password = password.password;
      if(this.key === value.userEmail){
          if(atob(this.password) === value.userPassword && this.key === value.userEmail){
          this.router.navigate(['/home']);
          flag = 1;
        }
      }
    }
    if(flag === 0) {
      alert('Invalid user');
    }
  }
}
