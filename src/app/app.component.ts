import { Habit } from './models/habit.model';
import { Observable } from 'rxjs';
import { HabitService } from './services/habit.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  adding = false;
  editing = false;
  habitForm: FormGroup;
  private editingIndex = -1;

  constructor(
    private readonly habitsService: HabitService,
    private readonly fb: FormBuilder
  ) {
    this.habitForm = this.fb.group({
      name: [undefined, [Validators.required]],
      frequency: [undefined, [Validators.required]],
      description: [undefined],
    });
  }

  get name(): AbstractControl | null {
    return this.habitForm.get('name');
  }

  get frequency(): AbstractControl | null {
    return this.habitForm.get('frequency');
  }

  get habits(): Observable<Habit[]> {
    return this.habitsService.findAll();
  }

  public onSubmit(): void {

    if (this.habitForm.valid ) {
      const habit = this.habitForm.value as Habit;

      if (this.editing) {
        this.habitsService.update(habit, this.editingIndex);
      } else {
        this.habitsService.save(habit);
      }

      this.exitFromForm();
    }

  }

  public onEditHabit(selectedHabit: Habit, index: number): void {
    this.habitForm.patchValue(selectedHabit);
    this.editing = true;
    this.editingIndex = index;
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
    this.habitForm.reset();  }
}
