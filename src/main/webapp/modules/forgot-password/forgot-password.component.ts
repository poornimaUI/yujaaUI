import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+.[a-zA-Z0-9]*$/;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private tokenKey:any;
  public key: string;
  forgotPasswordForm: FormGroup;
  constructor(
    private router: Router,
    private  fb: FormBuilder ) {
    this.forgotPasswordForm = fb.group({
      'userEmail' : [null, Validators.compose([Validators.pattern(EMAIL_REGEX), Validators.required])]
    })
   }

  ngOnInit() {   
  }

  forgotPassword(value) {
    let userEmailToken: string;
    let flag = 0;
    let n = Math.floor(Math.random()*1E16);
    let m = Math.floor(Math.random()*1E16);
    let token = n.toString()+m.toString();
    let tokenKey = btoa(token);
    for(var i=0, len=localStorage.length; i<len; i++){
      this.key = localStorage.key(i);
      if(this.key === value.userEmail){
        flag = 1;
        userEmailToken = this.key;
      }
    }      
     
    if(flag === 0){
        alert('Email Does not exist');
    }else{
        let data = JSON.parse(localStorage.getItem(userEmailToken));  
        let name = data.name;
        let password = data.password;
        localStorage.setItem(userEmailToken, JSON.stringify({Name:name,password:password,tokenKey: tokenKey}));
        this.router.navigate(['/resetpassword']);
    }
  }
}
