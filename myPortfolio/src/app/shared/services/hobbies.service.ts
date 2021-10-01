import { Injectable } from '@angular/core';
import { Hobby } from '../models/hobby';
import { Category } from 'src/app/shared/types/types/category';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  hobbies: Hobby[] = [
    {
      id: 0,
      name: 'Playing Guitar',
      category: Category.Music
    },
    {
      id: 1,
      name: 'Cooking',
      category: Category.Art
    },
    {
      id: 2,
      name: 'Drawing',
      category: Category.Art
    },
    {
      id: 3,
      name: 'Video Games',
      category: Category.Entertainment
    },
    {
      id: 4,
      name: 'Martial Arts',
      category: Category.Exercise
    },
    {
      id: 5,
      name: 'Rock Climbing',
      category: Category.Exercise
    },
    {
      id: 6,
      name: 'Writing',
      category: Category.Art
    },
    {
      id: 7,
      name: 'Singing',
      category: Category.Music
    },
    {
      id: 8,
      name: 'Tabletop Role-Playing Games',
      category: Category.Entertainment
    },
    {
      id: 9,
      name: 'Acting',
      category: Category.Art
    },
    {
      id: 10,
      name: 'Digital Art',
      category: Category.Art
    },
    {
      id: 11,
      name: 'Movies/Television',
      category: Category.Entertainment
    },
    {
      id: 12,
      name: 'Reading Novels/Comics',
      category: Category.Entertainment
    },
    {
      id: 13,
      name: 'Card Games',
      category: Category.Games
    },
    {
      id: 14,
      name: 'Jewelry Making/Metalsmithing',
      category: Category.Art
    }
  ];

  getHobbies = (): Observable<Hobby[]> => {
    return of(this.hobbies)
  }

  constructor() { }
}
