import { Component, OnInit } from '@angular/core';
import { Place } from '../models/place';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  model: Place = new Place();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Submit Successful: ', this.model);
  }

}
