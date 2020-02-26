import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  splashImg: string ='/assets/blackpearl.jpg';
  
  constructor() { console.log(this.splashImg);}

  ngOnInit() {
  }

}
