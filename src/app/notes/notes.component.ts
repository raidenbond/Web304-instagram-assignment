import { Component, OnInit } from '@angular/core';
import {DATA} from '../new data/data';
import {Post} from '../interfaces/data';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  datas: Post[] = DATA;
  constructor() {

   console.log(this.datas);
   }

  ngOnInit() {
    console.log(this.datas);
  }

}
