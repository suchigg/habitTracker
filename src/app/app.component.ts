import { Habit } from './models/habit.model';
import { Observable } from 'rxjs';
import { HabitService } from './services/habit.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'habitTracker';

  constructor(private readonly habitsService: HabitService ) {}

  get habits(): Observable<Habit[]> {
    return this.habitsService.findAll();
  }
}
