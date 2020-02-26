import { Component, OnInit } from '@angular/core';
import {ICON} from '../new data/icon'
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }
  show: boolean = false;

  open(){

    this.show = true;
  }

  close(){
    this.show = false;
  }

  ngOnInit() {
  }

}
