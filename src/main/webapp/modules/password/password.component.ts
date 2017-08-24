import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../data/data';
import { matchOtherValidator } from '../services/match-other-validator'

function passwordMatcher(c: AbstractControl) {
  /*var passwordNotMatched;
  if(c.get('passwrod').value === c.get('confirmedPassword').value){
      passwordNotMatched = null;
  }
  else{
    passwordNotMatched = 'Password Not Matched';
  }
  return passwordNotMatched;*/
  return c.get('password').value === c.get('confirmedPassword').value ? null : {'passwordNotMatched' : true};
}
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  public key: string;
  public heading:string;
  public href:string;
  constructor(
    private router: Router,
    private  fb: FormBuilder,
    private user: Data) {}
  ngOnInit() { 
    this.newPasswordForm = this.fb.group({
    'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    'confirmedPassword': [null, [Validators.required,Validators.minLength(6), matchOtherValidator('password')]]
    },{validator: passwordMatcher})
    if(this.router.url === '/createpassword'){
      this.heading = 'First Time Password';
      this.href = '/createpassword';
    }
    if(this.router.url === '/resetpassword'){
      this.heading = 'Reset Password';
      this.href = '/resetpassword';
    }
  }
  savePassword(value) { 
    if(this.router.url === '/createpassword'){
      for(var i=0, len = localStorage.length; i<len; i++ ) {
        this.key = localStorage.key(i);
        if(this.key === this.user.businessEmail){
          localStorage.setItem(this.user.businessEmail,JSON.stringify({name:this.user.firstName+' '+this.user.lastName,password:btoa(value.password)}));
        }/*if closed*/
      }/*for closed*/    
        this.router.navigate(['/home']);
    }
    if(this.router.url === '/resetpassword'){
      console.log('resetpassword');
    }
  }
}
