import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Data } from '../data/data';
import { MailSendService } from '../services/mailSendService/mailSend.service';
import { matchOtherValidator } from '../services/match-other-validator'
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+.[a-zA-Z0-9]*$/;

/*function emailMatcher(c: AbstractControl) {
  return c.get('businessEmail').value === c.get('confirmedEmail').value ? null : {'emailNotMatched' : true};
}*/
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  freeSignupForm: FormGroup;

  dialogRef: MdDialogRef<VerifyDialog>;
  post: any;
  public key: string;
  constructor(
    private  fb: FormBuilder,
    private dialog: MdDialog,
    private router: Router,
    private mailsend: MailSendService,
    private user: Data) {
  
  }

  ngOnInit() {
    this.freeSignupForm = this.fb.group({
  'firstName' : [null, Validators.required],
    'lastName' : [null, null],
    'businessEmail' : [null, Validators.compose([Validators.pattern(EMAIL_REGEX), Validators.required])],
    'confirmedEmail' : [null, Validators.compose([Validators.pattern(EMAIL_REGEX), Validators.required, matchOtherValidator('businessEmail')])]
  }/*,{validator: emailMatcher}*/)
  }

  creatAccount(post) {    
    let flag = 0;
    this.user.firstName = post.firstName;
    this.user.lastName = post.lastName;
    this.user.businessEmail= post.businessEmail;
    for(var i=0, len = localStorage.length; i<len; i++ ) {
      this.key = localStorage.key(i);
      if(this.key === this.user.businessEmail){         
        alert('email already exist');
        flag =1;
      }
    }
    if(flag === 0) {
         localStorage.setItem(this.user.businessEmail,JSON.stringify({fullName:this.user.firstName+' '+this.user.lastName}));
        this.mailsend.emailSender(post);
        this.dialogRef = this.dialog.open(VerifyDialog);
        this.dialogRef.componentInstance.accountData = post;
      }
    /*console.log(this.user.firstName+'signup');*/
        /*
    if(this.businessEmail !== this.confirmedEmail) {
      this.error = 'Email not matched';
    }
    console.log(this.firstName);*/
  }
}

@Component({
  selector: 'verify-dialog',
  template:`
  <h3>Hello {{accountData.firstName +' '+ accountData.lastName}}</h3>
  <p>Mail has been sent to your email id: <strong>{{accountData.businessEmail}}</strong></p>
  <button md-raised-button color="primary" (click)="verifyAccount()" md-dialog-close>Verify Account</button>`
})
export class VerifyDialog implements OnInit {

  accountData: any;
  constructor (
    public dialogRef: MdDialogRef<VerifyDialog>,
    private router: Router ) {
   }

  ngOnInit() {
  }
  verifyAccount(): void {
    this.router.navigate(['/createpassword']);
  }
}