import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  visitor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
