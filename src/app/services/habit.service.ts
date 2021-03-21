import { Habit } from './../models/habit.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const HABIT_ELEMENTS_INIT_DATA: Habit[] = [
  {
    name: '15 Minute Walk',
    frequency: 'Daily',
    description:
      'This habit makes my kitchen look nice and makes my day better the next morning.',
  },
  {
    name: 'Weed the Garden',
    frequency: 'Weekly',
    description:
      'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private habits: Habit[];

  constructor() {
    this.habits = HABIT_ELEMENTS_INIT_DATA;
  }

  public findAll(): Observable<Habit[]> {
    return of(this.habits);
  }
}
