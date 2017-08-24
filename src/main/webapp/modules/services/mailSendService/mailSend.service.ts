import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
@Injectable()
export class MailSendService {
  
  constructor(private http: Http) {  }
  emailSender(usercreds) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const emailid = usercreds.businessEmail;
      this.http.post('http://localhost:8888/sendemail', JSON.stringify({emailid: emailid}), {headers: headers}).subscribe((data) => {
        if (data.json().sucess) {
          console.log('mail sent');
          }
      });
    }
}