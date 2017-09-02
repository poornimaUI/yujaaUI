import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

export class TabSwitchingService{
public selectedIndex = 0;
 private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  openProfile() {
    if(location.pathname === '/home'){
       this.selectedIndex = 0;
    }
    else{
      this.selectedIndex = 0;
      this.componentMethodCallSource.next();
    }
  }
  openSettings() {
    if(location.pathname === '/home'){
      this.selectedIndex = 1;  
    }
    else{
      this.selectedIndex = 1;
      this.componentMethodCallSource.next();
    }
  }
  openSubscriptions() {
    if(location.pathname === '/home'){
      this.selectedIndex = 2;
    }
    else{
      this.selectedIndex = 2;
      this.componentMethodCallSource.next();
    }
  }
}