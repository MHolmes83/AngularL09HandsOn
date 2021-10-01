import { Component, OnInit } from '@angular/core';
import { Hobby } from '../../models/hobby';
import { HobbiesService } from '../../services/hobbies.service';
import { Category } from '../../types/types/category';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  [x: string]: any;
  hobbies!: Hobby[];
  dataService: HobbiesService

  constructor(private hobbiesService: HobbiesService) { 
    this.dataService = this.hobbiesService;
  }

  ngOnInit(): void {
    this.dataService.getHobbies().subscribe(hobbies => this.hobbies = hobbies);
  }

}
