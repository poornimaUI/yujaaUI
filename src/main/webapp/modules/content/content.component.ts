import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public visible = false;
  title = 'Yujaa ';
  constructor() { }

  ngOnInit() {
  }
  public next() {
    this.visible = !this.visible;
  }
}
