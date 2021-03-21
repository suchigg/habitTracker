import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Habit } from './models/habit.model';
import { HabitService } from './services/habit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  adding = false;
  editing = false;
  selectedHabit: Habit | undefined;
  private editingIndex = -1;

  constructor(private readonly habitsService: HabitService) {}

  get habits(): Observable<Habit[]> {
    return this.habitsService.findAll();
  }

  public onSubmit(habit: Habit): void {

      if (this.editing) {
        this.habitsService.update(habit, this.editingIndex);
      } else {
        this.habitsService.save(habit);
      }
      this.exitFromForm();
  }

  public onEditHabit(selected: {habit: Habit, index: number}): void {
    this.selectedHabit = selected.habit;
    this.editing = true;
    this.editingIndex = selected.index;
  }

  public onDeleteHabit(index: number): void {
    this.habitsService.delete(index);
  }

  public onCancel(): void {
    this.exitFromForm();
  }

  private exitFromForm(): void {
    this.adding = false;
    this.editing = false;
    this.editingIndex = -1;
    this.selectedHabit = undefined;
  }
}
