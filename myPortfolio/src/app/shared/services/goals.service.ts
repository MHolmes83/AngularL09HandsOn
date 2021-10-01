import { Injectable } from '@angular/core';
import { Goal } from '../models/goal';
import { Type } from 'src/app/shared/types/types/type';
import { Importance } from 'src/app/shared/types/types/importance';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Goal[] =[
    {
      id: 0,
      name: 'Get Married/Start Family',
      type: Type.Family,
      importance: Importance.Extremely
    },
    {
      id: 1,
      name: 'Obtain High Credit Score',
      type: Type.Financial,
      importance: Importance.Extremely
    },
    {
      id: 2,
      name: 'Gain Employment in Tech',
      type: Type.Vocational,
      importance: Importance.Extremely
    },
    {
      id: 3,
      name: 'Travel Abroad',
      type: Type.Travel,
      importance: Importance.Medium
    },
    {
      id: 4,
      name: 'Buy a House/Condo',
      type: Type.Family,
      importance: Importance.Extremely
    },
    {
      id: 5,
      name: 'Eat Healthier Foods',
      type: Type.Health,
      importance: Importance.High
    },
    {
      id: 6,
      name: 'Take Martial Arts Classes',
      type: Type.Health,
      importance: Importance.Medium
    },
    {
      id: 7,
      name: 'Start Own Tech Business',
      type: Type.Financial,
      importance: Importance.High
    },
    {
      id: 8,
      name: 'Buy a Car/Motorcylce',
      type: Type.Financial,
      importance: Importance.Low
    },
    {
      id: 9,
      name: 'Visit Hometown',
      type: Type.Travel,
      importance: Importance.Low
    },
    {
      id: 10,
      name: 'Visit Friends',
      type: Type.Travel,
      importance: Importance.High
    },
    {
      id: 11,
      name: 'Get More Involved in Activism for Causes Important to Me',
      type: Type.Family,
      importance: Importance.High
    }
  ];

  getGoals = (): Observable<Goal[]> => {
    return of(this.goals);
  }


  constructor() { }
}
