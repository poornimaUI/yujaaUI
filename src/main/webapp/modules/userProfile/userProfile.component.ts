import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabSwitchingService } from '../services/tabSwitching.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css']
})
export class UserProfileComponent implements OnInit{
	public selectedIndex = 0;
	src:String;
	constructor(private tabs: TabSwitchingService){
		this.selectedIndex = tabs.selectedIndex;
		this.tabs.componentMethodCalled$.subscribe(
        () => {
          this.selectedIndex = tabs.selectedIndex;
        }
      );
	}
	ngOnInit(){
		this.src = "https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/1512621_403412733094684_1423612925_n.jpg?oh=a22bfbd1bc33f5749d57b97a219efdd5&oe=5A201048";
	}
	 
}