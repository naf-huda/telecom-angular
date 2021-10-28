import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    id : 1,
    name : 'Nafim Huda'
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
