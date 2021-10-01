import { Component, OnInit } from '@angular/core';
import { Goal } from '../../models/goal';
import { GoalsService } from '../../services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals!: Goal[];
  dataService: GoalsService

  constructor(private goalsService: GoalsService) {
    this.dataService = goalsService;
   }

  ngOnInit(): void {
    this.dataService.getGoals().subscribe(goals => this.goals = goals);
  }

}
