import { Injectable } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { Level } from 'src/app/shared/types/level';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills:  Skill[] = [
    {
      id: 0,
      name: 'HTML5',
      level: Level.Beginner
    },
    {
      id: 1,
      name: 'CSS3',
      level: Level.Beginner

    },
    {
      id: 2,
      name: 'JavaScript',
      level: Level.Beginner
    },
    {
      id: 3,
      name: 'Angular',
      level: Level.Beginner
    },
    {
      id: 4,
      name: 'React',
      level: Level.Beginner
    },
    {
      id: 5,
      name: 'EntityFramework',
      level: Level.Beginner
    },
    {
      id: 6,
      name: 'MySQL',
      level: Level.Beginner
    },
    {
      id: 7,
      name: 'SQLite',
      level: Level.Beginner
    },
    {
      id: 8,
      name: 'MongoDB',
      level: Level.Beginner
    },
    {
      id: 9,
      name: 'PuTTY',
      level: Level.Intermediate
    },
    {
      id: 10,
      name: 'GitBash',
      level: Level.Intermediate
    },
    {
      id: 11,
      name: 'Photoshop',
      level: Level.Intermediate
    },
    {
      id: 12,
      name: 'Autodesk Maya',
      level: Level.Intermediate
    },
    {
      id: 13,
      name: 'Autodesk Mudbox',
      level: Level.Beginner
    },
    {
      id: 14,
      name: 'Blender',
      level: Level.Beginner
    },
    {
      id: 15,
      name: 'ZBrush',
      level: Level.Beginner
    }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }

  constructor() { }
}
