import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data/data';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public visible = false;
  public user:string;
  public expiry:string;
  public hide = false;
  
  constructor( private router: Router,
               private data:Data) { }
  ngOnInit() {
    this.user = /*this.data.firstName*/"Naveen Sain";
    this.expiry = 'Expiry: 15 days left'
  }
  search(){
    this.hide = !this.hide;
  }

  changeFullScreenIcon() {
    this.visible = !this.visible;
  }
  
  signout() {
    this.router.navigate(['/signin']);
  }
}
