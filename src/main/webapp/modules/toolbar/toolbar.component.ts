import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data/data';
import { TabSwitchingService } from '../services/tabSwitching.service';
import { Location } from '@angular/common';

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
  public tabs = false;
  
  constructor( private router: Router,
               private data:Data,
               private tab: TabSwitchingService,
               private location: Location) { }
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
  openProfileTab(){
      this.tab.openProfile();
      this.router.navigate(['home/userprofile']);
  }
  openSettingsTab(){
      this.tab.openSettings();
      this.router.navigate(['home/userprofile']); 
  }
  openSubscriptionsTab(){
      this.tab.openSubscriptions();
      this.router.navigate(['home/userprofile']);
  }
}
